<template>
  <div class="flex h-screen">
    <!-- Sidebar -->
    <aside class="w-56 bg-gray-100 shadow flex flex-col items-center py-6">
      <img src="@/assets/img/horizon.png" alt="Logo du site" class="h-32 mb-6" />

      <nav class="flex flex-col space-y-3 w-full px-4">
        <NuxtLink
          to="/dashboard"
          class="px-3 py-2 rounded-lg text-gray-700 font-medium"
          active-class="text-grey-200 hover:border-b hover:border-[#399A77] font-bold"
        >
          Dashboard
        </NuxtLink>
        <NuxtLink
          to="/expenses"
          class="px-3 py-2 rounded-lg text-gray-700 font-medium"
          active-class="text-grey-200 hover:border-b hover:border-[#399A77] font-bold"

        >
          Expenses
        </NuxtLink>
        <NuxtLink
          to="/parametre"
          class="px-3 py-2 rounded-lg text-gray-700 font-medium"
          active-class="text-grey-200 hover:border-b hover:border-[#399A77] font-bold"

        >
          Paramètres
        </NuxtLink>
      </nav>
    </aside>

    <!-- Main Content -->
    <div class="flex flex-col flex-1">
      <!-- Header -->
      <header class="bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center">
        <h1 class="text-lg font-semibold text-gray-800">{{ pageTitle }}</h1>
      </header>

      <!-- Page Content -->
      <main class="flex-1 p-6 bg-gray-50">
        <slot />
      </main>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router"
import { ref } from "vue"
import { useCookie } from "#app"

const router = useRouter()
const pageTitle = ref("Bienvenue sur votre tableau de bord ")

const logout = () => {
  const token = useCookie("token")
  token.value = null
  router.push("/")
}
</script>
