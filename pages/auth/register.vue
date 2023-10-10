<template>
  <div class="flex flex-col gap-8">
    <h1>Créer un compte</h1>
    <UForm
      :schema="loginSchema"
      :state="form"
      @submit="submit"
      class="text-left gap-2 flex flex-col"
    >
      <UFormGroup label="Nom d'utilisateur" name="username">
        <UInput v-model="form.username" />
      </UFormGroup>
      <UFormGroup label="Mot de passe" name="password">
        <UInput v-model="form.password" type="password" />
      </UFormGroup>
      <UButton type="submit" color="green" block class="mt-2">
        S'enregistrer
      </UButton>
    </UForm>
  </div>
</template>
<script setup>
import { loginSchema } from "../../shared/zod/auth";
const form = reactive({ username: "", password: "" });
async function submit() {
  myFetch("/auth/register", { method: "POST", body: form }).then(() =>
    navigateTo("/auth/login")
  );
}
</script>
