<template>
  <div>
    <Back />
    <h1 class="mb-2">Ajouter un profil</h1>
    <ProfilForm @submit="submit" />
  </div>
</template>
<script setup>
const submit = (body) => {
  myFetch("/profil", { method: "post", body }).then(() => {
    navigateTo("/profil");
    // TODO : Confirm
    // useNuxtApp().$confirm({
    //   title: "Ajout du profil réussi",
    //   content: "Voulez-vous être redirigé vers la liste des profils ?",
    //   callback: () => navigateTo("/profil"),
    // });
  });
};
</script>
