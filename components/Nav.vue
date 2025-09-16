<template>
    <!-- <div class="home">
        <h1>Welcome to the Home Page</h1>
    </div> -->

        <!-- Header -->
    <header class="bg-white shadow-sm">
      <div class="container mx-auto px-6 py-4 flex justify-between items-center">
        <!-- Logo + Titre -->
        <div class="flex items-center">
          <div class="w-32 h-32 bg-[var(--primary-color)] rounded-lg flex items-center justify-center -mr-9">
            <nuxt-link to="/">
            <img to="/" src="@/assets/img/€.png" alt="Logo du site" class="w-20 h-20"/>

            </nuxt-link>
          </div>
          <h1 to="/" class="text-lg text-bold mx-4 text-gray-900">Suivi de Dépenses</h1>
        </div>

        <!-- Actions -->
        <div class="flex items-center gap-6">
          <NuxtLink to="login" class="border border-[#38E07B] py-2 px-4 rounded text-gray-600  hover:bg-[#38E07B] hover:text-white font-semibold">
            Connexion
        </NuxtLink>

        <NuxtLink to="register" class="border bg-[#38E07B] py-2 px-4 rounded text-white  hover:border-[#38E07B] font-semibold hover:bg-white hover:text-gray-600">
                Inscription
        </NuxtLink>

            <div class="w-full border border-gray-300 "></div>
        </div>
    </div>
    
</header>

</template>