<!-- pages/index.vue -->
<template>
    <div>
          <div class="bg-gray-50 text-gray-800  flex flex-col" style='font-family: Manrope, "Noto Sans", sans-serif;'>
  
    <!-- Main -->
    <main class="flex-1">

      <section class="py-20 bg-white">
        <div class="container mx-auto px-6 text-center">
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Suivez vos dépenses facilement</h2>
          <p class="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Prenez le contrôle de vos finances. Notre application simple et intuitive vous aide à comprendre où va votre argent.
          </p>

          <NuxtLink to="register" class="px-8 py-4 my-4 text-white bg-[#38E07B] rounded-full font-semibold hover:bg-opacity-90 text-lg">
            Inscrivez-vous dès maintenant
          </NuxtLink>
        </div>
      </section>

      <!-- Section Aperçu -->
      <section class="py-6 bg-gray-50">
        <div class="container mx-auto px-6">
          <div class="grid lg:grid-cols-2 gap-16 items-center">

            <HomeDepense />
            <Table />

          </div>
        </div>
      </section>
    </main>


  </div>
    </div>
</template> 