<template>
  <div v-if="profil" class="flex items-center gap-4">
    <UAvatar :alt="`${profil.firstName} ${profil.lastName}`" size="2xl" />
    <p>{{ profil.firstName }} {{ profil.lastName }}</p>
  </div>
</template>
<script setup>
const { profil } = defineProps({ profil: { default: null } });
</script>
