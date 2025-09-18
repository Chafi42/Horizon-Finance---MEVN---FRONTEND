<script setup>
import { ref } from 'vue'
import { loginUser } from '~/services/userService'
import { navigateTo } from '#app'   // Nuxt 3

const email = ref('')
const password = ref('')
const message = ref('')

const handleLogin = async () => {
  try {
    const res = await loginUser({ email: email.value, password: password.value })
    console.log("Réponse API login:", res)  // 👈 debug

    // adapte ici selon ta vraie réponse API
    if (res.token || res.accessToken) {
      localStorage.setItem("token", res.token || res.accessToken)
    }

    message.value = 'Connexion réussie ✅'

    // Redirection
    await navigateTo('/dashboard')

  } catch (err) {
    console.error('Erreur API:', err)
    message.value = "Erreur lors de la connexion ❌"
  }
}
definePageMeta({
  layout: "user"
})
</script>


<template>

<div
  class="w-full mt-4 flex flex-col items-center justify-center"
>
  <div class="max-w-sm w-full text-gray-600 space-y-5">
    <div class="text-center pb-8">
     
      <div class="mt-5">
        <h3 class="text-gray-800 text-2xl font-bold sm:text-3xl">
          Connexion
        </h3>
      </div>
    </div>
    <form @submit.prevent="handleLogin" class="space-y-5">
      <div>
        <label class="font-medium"> Email
                      <span class="text-green-500">*</span>

                    </label>
        
        <input
          v-model="email"
          type="email"
          required
          class="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-[#399A77] shadow-sm rounded-lg"
        />
      </div>
      <div>
         <div class="my-4">
          <label for="password" class="font-medium">Mot de passe
            <span class="text-green-500">*</span>
          </label>
          <input v-model="password" type="password" class="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-[#399A77] shadow-sm rounded-lg"/>
        </div>
      </div>
      <div class="flex items-center justify-between text-sm">
        <div class="flex items-center gap-x-3">
          <input
            type="checkbox"
            id="remember-me-checkbox"
            class="text-red-500 checkbox-item peer hidden"
          />
          <label
            for="remember-me-checkbox"
            class="relative flex w-5 h-5 bg-white peer-checked:bg-[#399A77] rounded-md border ring-offset-2 duration-150 peer-active:ring cursor-pointer after:absolute after:inset-x-0 after:top-[3px] after:m-auto after:w-1.5 after:h-2.5 after:border-r-2 after:border-b-2 after:border-white after:rotate-45"
          ></label>
          <span>Se souvenir</span>
        </div>
        <NuxtLink 
          to="/"
          class="text-center text-[#399A77] font-bold text-xs hover:border-b"
          >Mot de passe oublié ?</NuxtLink
        >
      </div>
      <button
  type="submit"
  class="w-full px-4 py-2 text-white font-medium bg-[#399A77] cursor-pointer rounded-lg duration-150"
>
  Connexion
</button>
    </form>
    <button
    
      class="w-full flex items-center justify-center gap-x-3 py-2.5 border rounded-lg text-sm font-medium hover:bg-gray-50 duration-150 active:bg-gray-100 cursor-pointer"
    >
      <!-- SVG for Google Sign In -->
      <img
        src="https://raw.githubusercontent.com/sidiDev/remote-assets/7cd06bf1d8859c578c2efbfda2c68bd6bedc66d8/google-icon.svg"
        alt="Google"
        class="w-5 h-5"
      />
      <!-- Comment: Google Icon SVG here -->
      Continue with Google
    </button>
    <p class="text-center text-sm">
      Vous n'avez pas de compte ?
      <NuxtLink
        to="register"
        class="font-bold text-[#399A77] hover:border-b">
        Inscrivez-vous
      </NuxtLink>
    </p>
  </div>
</div>
  
</template>