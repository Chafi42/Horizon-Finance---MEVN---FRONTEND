<template>
    <!-- Tableau -->
            <div class="bg-white p-6 rounded-lg shadow-lg">
              <h3 class="text-xl font-bold text-gray-900 mb-4">Dépenses récentes</h3>
              <div class="overflow-x-auto">
                <table class="w-full text-left">
                  <thead>
                    <tr class="border-b">
                      <th class="py-3 px-4 font-semibold text-gray-600">Description</th>
                      <th class="py-3 px-4 font-semibold text-gray-600">Catégorie</th>
                      <th class="py-3 px-4 font-semibold text-gray-600 text-right">Montant</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="border-b hover:bg-gray-50">
                      <td class="py-3 px-4 text-gray-800 font-medium">Déjeuner au restaurant</td>
                      <td class="py-3 px-4 text-gray-600">Nourriture</td>
                      <td class="py-3 px-4 text-gray-800 font-medium text-right">25,00 €</td>
                    </tr>
                    <tr class="border-b hover:bg-gray-50">
                      <td class="py-3 px-4 text-gray-800 font-medium">Courses</td>
                      <td class="py-3 px-4 text-gray-600">Shopping</td>
                      <td class="py-3 px-4 text-gray-800 font-medium text-right">75,00 €</td>
                    </tr>
                    <tr class="border-b hover:bg-gray-50">
                      <td class="py-3 px-4 text-gray-800 font-medium">Cinéma</td>
                      <td class="py-3 px-4 text-gray-600">Divertissement</td>
                      <td class="py-3 px-4 text-gray-800 font-medium text-right">12,00 €</td>
                    </tr>
                    <tr class="hover:bg-gray-50">
                      <td class="py-3 px-4 text-gray-800 font-medium">Facture d’électricité</td>
                      <td class="py-3 px-4 text-gray-600">Services</td>
                      <td class="py-3 px-4 text-gray-800 font-medium text-right">50,00 €</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
</template>