<template>
  <div class="flex flex-col gap-8 items-center" v-if="!error">
    <Back />
    <template v-if="edit">
      <ProfilForm :profil="profil" @submit="update" />
      <UButton
        label="Annuler"
        color="white"
        @click="edit = false"
        block
        class="-mt-6"
      />
    </template>
    <template v-else>
      <UAvatar :alt="`${profil.firstName} ${profil.lastName}`" size="3xl" />
      <h1>{{ profil.firstName }} {{ profil.lastName }}</h1>
      <div>
        <div
          v-for="name in attributes"
          :key="name"
          class="flex justify-between my-2"
        >
          <div class="capitalize mr-8 text-gray-500">
            {{ dico[name] ?? name }} :
          </div>
          <template v-if="name == 'address'"
            ><ProfilAddress :address="profil.attributes.address"
          /></template>
          <template v-else>
            <div class="value">{{ profil.attributes[name] }}</div>
          </template>
        </div>
      </div>
      <UButton class="mt-4" @click="edit = true">Modifier le profil</UButton>
    </template>
  </div>
</template>
<script setup>
import dico from "/shared/dico/profil";
definePageMeta({
  middleware: ["auth"],
});
const edit = ref(false);
const { id } = useRoute().params;

const {
  data: profil,
  error,
  pending,
  refresh,
} = await useMyFetch("/profil/" + id);
const attributes = computed(() => {
  return Object.keys(profil.value.attributes).filter(
    (e) => e != "firstName" && e !== "lastName"
  );
});

const update = async (profil) => {
  await myFetch("/profil/" + profil._id, { method: "put", body: profil });
  await refresh();
  edit.value = false;
};
</script>
<style lang="scss" scoped>
.value {
  min-width: 100px;
}
</style>
