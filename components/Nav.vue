<template>
        <!-- Header -->
    <header class="bg-white shadow-sm">
      <div class="container mx-auto px-6 py-4 flex justify-between items-center">
        <!-- Logo + Titre -->
        <div class="flex items-center">
          <div class="w-32 h-32 bg-[var(--primary-color)] rounded-lg flex items-center justify-center -mr-9">
            <NuxtLink to="/">
            <img src="@/assets/img/horizon.png" alt="Logo du site" class="h-40"/>
            </NuxtLink>
          </div>
        </div>

        <!-- Actions -->
        <div class="flex items-center gap-6">
          <NuxtLink to="login" class="border border-[#399A77] py-2 px-4 rounded text-gray-600  hover:bg-[#399A77] hover:text-white font-semibold">
            Connexion
        </NuxtLink>

        <NuxtLink to="register" class="border bg-[#399A77] py-2 px-4 rounded text-white  hover:border-[#399A77] font-semibold hover:bg-white hover:text-gray-600">
                Inscription
        </NuxtLink>

            <div class="w-full border border-gray-300 "></div>
        </div>
    </div>
    
</header>

</template>