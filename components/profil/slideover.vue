<template>
  <div class="fixed h-full">
    <USlideover
      v-model="isOpen"
      :overlay="false"
      :transition="false"
      :ui="{ wrapper: 'fixed inset-0 flex z-50 flex-row-reverse' }"
    >
      <UCard
        class="flex flex-col flex-1"
        :ui="{
          body: { base: 'flex-1' },
          ring: '',
          divide: 'divide-y divide-gray-100 dark:divide-gray-800',
        }"
      >
        <template #header>
          <div class="flex items-center justify-between">
            <h3
              class="text-base font-semibold leading-6 text-gray-900 dark:text-white"
            >
              Liste des profils
            </h3>
            <UButton
              color="gray"
              variant="ghost"
              icon="i-heroicons-x-mark-20-solid"
              class="-my-1"
              @click="isOpen = false"
            />
          </div>
        </template>
        <SearchAddress
          :modelValue="address"
          @update:modelValue="searchProfil"
          placeholder="Secteur recherché ..."
        />
        <div
          v-for="profil in profils"
          :key="profil.id"
          class="flex flex-col gap-4 py-4"
        >
          <ProfilItem
            :profil="profil"
            class="hover:cursor-pointer hover:bg-slate-100 hover:bg-opacity-5"
            @click="focus(profil)"
          />
        </div>
      </UCard>
    </USlideover>
    <div
      class="bg-white w-10 h-10 text-black flex justify-center items-center rounded-r-md absolute bottom-1/2"
      @click="isOpen = true"
      v-if="!isOpen"
    >
      <UIcon name="i-ep-arrow-right-bold" class="mr-1" />
    </div>
  </div>
</template>
<script setup>
import { inject } from "vue";
const isOpen = ref(false);
const address = ref(null);
const profils = inject("profils", []);
const searchProfil = async (gps) => {
  console.log(gps);
  useRouter().push({ query: { lat: gps.lat, long: gps.long } });
  address.value = gps;
};
const focus = (profil) => {
  navigateTo("/profil/detail/" + profil._id);
};
</script>
