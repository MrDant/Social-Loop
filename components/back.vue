<template>
  <div class="absolute top-2 left-2">
    <UButton @click="back">Retour</UButton>
  </div>
</template>
<script setup>
const back = () => {
  useRouter().back();
};
</script>
