<template>
  <div class="flex flex-col gap-2 items-center">
    <UAvatar :alt="`${profil.firstName} ${profil.lastName}`" size="3xl" />
    <h1>{{ profil.firstName }} {{ profil.lastName }}</h1>
    <UForm
      ref="form"
      :schema="profilSchema"
      :state="profil"
      @submit="emit('submit', profil)"
      class="flex flex-col gap-2"
    >
      <div class="flex gap-2">
        <UFormGroup label="Prénom" name="firstName" class="w-1/2">
          <UInput v-model="profil.firstName" />
        </UFormGroup>
        <UFormGroup label="Nom" name="lastName" class="w-1/2">
          <UInput v-model="profil.lastName" />
        </UFormGroup>
      </div>

      <SearchAddress v-model="profil.attributes.address" />
      <div class="flex flex-col gap-2">
        <template v-for="name in Object.keys(profil.attributes)" :key="name">
          <UFormGroup
            :label="dico[name] ?? name"
            :name="name"
            class="capitalize"
            v-if="name !== 'gps' && name !== 'address'"
          >
            <UInput v-model="profil.attributes[name]" />
          </UFormGroup>
        </template>
      </div>
      <UButton class="mt-4" block @click="submit">Enregistrer</UButton>
    </UForm>
  </div>
</template>
<script setup>
import { profilSchema } from "../../shared/zod/profil";
import dico from "../../shared/dico/profil";
import { defu } from "defu";
const props = defineProps({ profil: {}, clearOnSubmit: true });
const profil = reactive(
  defu(
    {
      firstName: "",
      lastName: "",
      attributes: {
        phone: "",
        address: null,
      },
    },
    props.profil
  )
);
const emit = defineEmits(["submit"]);

const toast = useToast();
const form = ref();
const submit = () => {
  form.value
    .validate()
    .then(() => {
      emit("submit", profil);
      if (props.clearOnSubmit) {
        form.value.clear();
      }
    })
    .catch(() => {
      const err = form.value.errors[0];
      toast.add({
        id: err.path,
        title: dico[err.path.split(".").pop()] ?? err.path,
        description: err.message,
        color: "red",
        icon: "i-ep-circle-close",
      });
    });
};
</script>
