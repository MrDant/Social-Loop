<template>
  <div class="w-full h-full">
    <MapboxMap
      map-id="mapId"
      :options="{
        style: 'mapbox://styles/mapbox/streets-v12?optimize=true', // style URL
        center: [10, 49], // starting position
        zoom: 11, // starting zoom
        logoPosition: 'bottom-right',
      }"
    />
    <UButton
      class="absolute top-2 right-11"
      v-if="addProfil"
      @click="navigateTo('/profil/add')"
      >Ajouter un profil</UButton
    >

    <ProfilSlideover />
  </div>
</template>
<script setup>
import { GeolocateControl } from "mapbox-gl";
import { provide } from "vue";
definePageMeta({
  middleware: ["auth"],
  layout: "",
});
const mapRef = useMapboxRef("mapId");
const addProfil = hasRole("profil_add");
const route = useRoute();
const profils = ref([]);

provide("profils", profils);

const move = ({ lat, long }) => {
  if (!lat || !long) {
    return;
  }
  if (mapRef.value) {
    mapRef.value.jumpTo({ center: [long, lat] });
  }
};

onMounted(() => {
  // mapRef.value.addControl(new NavigationControl());
  const geolocation = new GeolocateControl({
    positionOptions: {
      enableHighAccuracy: true,
    },
    // When active the map will receive updates to the device's location as it changes.
    trackUserLocation: false,
    // Draw an arrow next to the location dot to indicate which direction the device is heading.
    showUserHeading: false,
  });

  useMapbox("mapId", (map) => {
    map.addControl(geolocation);
    map.loadImage("/profil-icon.png", (error, image) => {
      if (error) throw error;
      map.addImage("admin-icon", image);
      map.addSource("points", {
        type: "geojson",
        data: {
          type: "FeatureCollection",
          features: [],
        },
      });
      map.addLayer({
        id: "points",
        type: "symbol",
        source: "points",
        layout: {
          "icon-image": "admin-icon",
          "icon-size": 0.2,
        },
      });
      map.on("click", "points", (e) => {
        navigateTo("/profil/detail/" + e.features[0].properties._id);
      });
      map.on("mouseenter", "points", () => {
        map.getCanvas().style.cursor = "pointer";
      });
      map.on("mouseleave", "points", () => {
        map.getCanvas().style.cursor = "";
      });
      map.on("moveend", async () => {
        await searchProfils();
      });
      if (!route.query.lat && !route.query.long) {
        navigator.geolocation.getCurrentPosition((e) => {
          move({ lat: e.coords.latitude, long: e.coords.longitude });
        });
      } else {
        move(route.query);
      }
    });
  });
});

// move map
watch(
  () => route.query,
  async () => {
    move(route.query);
  }
);

// markers
watch(
  () => profils.value,
  async (values) => {
    mapRef.value.getSource("points").setData({
      type: "FeatureCollection",
      features: values.map((e) => {
        return {
          type: "Feature",
          properties: e,
          geometry: {
            type: "Point",
            coordinates: [e.attributes.address.long, e.attributes.address.lat],
          },
        };
      }),
    });
  },
  { immediate: true }
);
const searchProfils = async () => {
  const { lat, lng } = mapRef.value.getCenter();
  profils.value = await myFetch("/profil", {
    query: { lat, long: lng },
  });
};
</script>
