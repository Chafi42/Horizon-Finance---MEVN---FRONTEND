<!-- pages/register.vue -->
<script setup>
import { ref } from 'vue'
import { registerUser } from '~/services/userService'

const name = ref('')
const email = ref('')
const password = ref('')
const message = ref('')

const handleRegister = async () => {
  console.log("Tentative d'inscription avec :", name.value, email.value, password.value)

  try {
    const res = await registerUser({
      name: name.value,
      email: email.value,
      password: password.value
    })

    console.log("Réponse API :", res) // <== tu dois voir la réponse backend ici

    message.value = 'Compte créé avec succès ✅'

    await navigateTo('/login')
  } catch (err) {
    console.error("Erreur API:", err)
    message.value = "Erreur lors de l'inscription ❌"
  }
}

</script>

<template>
  <div class="w-full mt-4 flex flex-col items-center justify-center">
    <div class="max-w-sm w-full text-gray-600 space-y-5">
      <div class="text-center pb-8">
        <div class="mt-5">
          <h3 class="text-gray-800 text-2xl font-bold sm:text-3xl">
            Inscription
          </h3>
        </div>
      </div>

      <!-- Formulaire -->
      <form @submit.prevent="handleRegister" class="space-y-5">
        <div>
          <label class="font-medium">
            Nom <span class="text-green-500">*</span>
          </label>
          <input
            v-model="name"
            type="text"
            required
            class="w-full mt-2 px-3 py-2 border rounded-lg"
          />
        </div>

        <div>
          <label class="font-medium">
            Email <span class="text-green-500">*</span>
          </label>
          <input
            v-model="email"
            type="email"
            required
            class="w-full mt-2 px-3 py-2 border rounded-lg"
          />
        </div>

        <div>
          <label class="font-medium">
            Mot de passe <span class="text-green-500">*</span>
          </label>
          <input
            v-model="password"
            type="password"
            required
            class="w-full mt-2 px-3 py-2 border rounded-lg"
          />
        </div>

        <button
          type="submit"
          class="w-full px-4 py-2 text-white font-medium bg-[#38E07B] rounded-lg"
        >
          S'inscrire
        </button>
      </form>

      <p v-if="message" class="text-center text-sm text-red-500 mt-2">
        {{ message }}
      </p>

      <p class="text-center mt-4">
        Vous avez un compte ?
        <NuxtLink to="/login" class="text-[#38E07B]">
          Connectez-vous
        </NuxtLink>
      </p>
    </div>
  </div>
</template>
