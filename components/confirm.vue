<template>
  <UModal v-model="isOpen" prevent-close>
    <UCard
      :ui="{
        ring: '',
        divide: 'divide-y divide-gray-100 dark:divide-gray-800',
      }"
    >
      <template #header>
        <div class="flex items-center justify-between">
          <h3
            class="text-base font-semibold leading-6 text-gray-900 dark:text-white"
          >
            {{ options.title }}
          </h3>
          <UButton
            color="gray"
            variant="ghost"
            icon="i-heroicons-x-mark-20-solid"
            class="-my-1"
            @click="close"
          />
        </div>
      </template>
      <p>{{ options.content }}</p>
      <template #footer>
        <div class="flex justify-end gap-2">
          <UButton label="Non" @click="close" color="red" />
          <UButton label="Oui" @click="confirm" color="green" />
        </div>
      </template>
    </UCard>
  </UModal>
</template>
<script setup>
import { defu } from "defu";
const isOpen = ref(false);
const options = ref({ title: "Title", content: "", callback: null });
const confirm = () => {
  options.value.callback ? options.value.callback() : null;
  close();
};
const emits = defineEmits(["update:model-value", "result"]);
const close = () => {
  isOpen.value = false;
};

if (!useNuxtApp().$confirm) {
  useNuxtApp().provide("confirm", (opt) => {
    console.log("pass confirm");
    options.value = defu(opt, { title: "Title", content: "", callback: null });
    isOpen.value = true;
  });
}
</script>
