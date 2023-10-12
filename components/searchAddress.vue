<template>
  <USelectMenu
    :model-value="modelValue"
    @update:model-value="emits('update:modelValue', $event)"
    :searchable="search"
    placeholder="Adresse de la personne"
    by="id"
  />
</template>
<script setup>
const emits = defineEmits(["update:modelValue"]);
const { modelValue } = defineProps({ modelValue: "" });
const apiUrl = useRuntimeConfig().public.addressBaseUrl;
const search = async (q) => {
  try {
    const addresses = (
      await $fetch(apiUrl + "/search/", {
        params: { q },
      })
    ).features
      .map((e) => e.properties)
      .filter(Boolean);
    return addresses ?? [];
  } catch (err) {
    console.log(err);
    return [];
  }
};
</script>
