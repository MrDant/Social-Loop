<template>
  <div>{{ address.label ?? "" }}</div>
</template>
<script setup>
const { address } = defineProps({ address: {} });
</script>
