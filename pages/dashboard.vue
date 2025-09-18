<script setup>
import { ref, onMounted } from "vue"
import { navigateTo } from "#app"

const userName = ref("")

onMounted(() => {
  const user = localStorage.getItem("user")
  if (user) {
    userName.value = JSON.parse(user).name
  }
})

const logout = () => {
  localStorage.removeItem("token")
  localStorage.removeItem("user")
  navigateTo("/")
}
</script>

<template>
  <div class="p-6">
    <h1 class="text-2xl font-bold">
      Bienvenue sur ton Dashboard 🎉
      <span v-if="userName">, {{ userName }}</span>
    </h1>

    <button
      @click="logout"
      class="mt-4 px-4 py-2 bg-red-500 text-white rounded"
    >
      Déconnexion
    </button>
  </div>
</template>
