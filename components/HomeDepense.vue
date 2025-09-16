<template>
    <!-- Texte -->
            <div>
              <h3 class="text-3xl font-bold text-gray-900 mb-4">Un aperçu de vos dépenses</h3>
              <p class="text-gray-600 mb-8">
                Visualisez facilement vos habitudes financières grâce à notre tableau de bord clair. Suivez vos dépenses totales, vos principales catégories et vos transactions récentes.
              </p>
              <div class="space-y-4">
                <div class="flex items-center gap-4">
                  <div class="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center text-green-500">
                    <img src="@/assets/img/logo/dollar.png" alt="" srcset="">
                  </div>
                  <div>
                    <h4 class="font-semibold text-gray-800">Dépenses totales</h4>
                    <p class="text-gray-500">Gardez un œil sur votre budget mensuel.</p>
                  </div>
                </div>
                <div class="flex items-center gap-4">
                  <div class="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center text-blue-500">
                    <img src="@/assets/img/logo/search.png" alt="By category" srcset="">
                  </div>
                  <div>
                    <h4 class="font-semibold text-gray-800">Dépenses par catégorie</h4>
                    <p class="text-gray-500">Identifiez vos plus gros postes de dépenses.</p>
                  </div>
                </div>
                <div class="flex items-center gap-4">
                  <div class="w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center text-purple-500">
                    <img src="@/assets/img/logo/recent.png" alt="Dépenses récentes" srcset="">
                  </div>
                  <div>
                    <h4 class="font-semibold text-gray-800">Dépenses récentes</h4>
                    <p class="text-gray-500">Consultez vos dernières transactions instantanément.</p>
                  </div>
                </div>
              </div>
            </div>
</template>