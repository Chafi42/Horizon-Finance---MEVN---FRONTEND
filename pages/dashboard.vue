<script setup>
const logout = () => {
  localStorage.removeItem("token");
  navigateTo("/login");
};
</script>

<template>
  <div class="p-6">
    <h1 class="text-2xl font-bold">Bienvenue sur ton Dashboard 🎉</h1>

    <button
      @click="logout"
      class="mt-4 px-4 py-2 bg-red-500 text-white rounded"
    >
      Déconnexion
    </button>
  </div>
</template>
