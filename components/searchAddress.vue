<template>
  <USelectMenu
    :model-value="modelValue"
    @update:model-value="emits('update:modelValue', $event)"
    :searchable="search"
    :placeholder="placeholder"
    by="id"
  />
</template>
<script setup>
const emits = defineEmits(["update:modelValue"]);
const { modelValue } = defineProps({
  modelValue: "",
  placeholder: { default: "" },
});
const apiUrl = useRuntimeConfig().public.addressBaseUrl;
const search = async (q) => {
  try {
    const addresses = (
      await $fetch(apiUrl + "/search/", {
        params: { q },
      })
    ).features
      .map((e) => ({
        ...e.properties,
        lat: e.geometry.coordinates[1],
        long: e.geometry.coordinates[0],
      }))
      .filter(Boolean);
    return addresses ?? [];
  } catch (err) {
    console.log(err);
    return [];
  }
};
</script>
