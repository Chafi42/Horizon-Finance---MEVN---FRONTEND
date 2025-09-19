<script setup>
import { ref, watch } from "vue"

const props = defineProps({
  show: Boolean,
  isEditing: Boolean,
  expense: Object,
  categories: Array
})

const emits = defineEmits(["close", "save"])

// Champs internes du formulaire
const title = ref("")
const amount = ref("")
const category = ref("")
const notes = ref("")

// Quand l’expense change (édition), remplir les champs
watch(
  () => props.expense,
  (val) => {
    if (val) {
      title.value = val.title || ""
      amount.value = val.amount || ""
      category.value = val.category || ""
      notes.value = val.notes || ""
    } else {
      title.value = amount.value = category.value = notes.value = ""
    }
  },
  { immediate: true }
)

// Sauvegarde (ajout ou update)
const handleSubmit = () => {
  emits("save", {
    _id: props.expense?._id,
    title: title.value,
    amount: Number(amount.value),
    category: category.value,
    notes: notes.value
  })
}
</script>

<template>
  <div v-if="show" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
    <div class="bg-white p-6 rounded w-96">
      <h2 class="text-lg font-bold mb-4">
        {{ isEditing ? "✏️ Modifier" : "➕ Ajouter" }} une dépense
      </h2>

      <form @submit.prevent="handleSubmit" class="space-y-3">
        <input v-model="title" placeholder="Titre" class="w-full border p-2 rounded" />
        <input v-model="amount" type="number" placeholder="Montant" class="w-full border p-2 rounded" />
        <select v-model="category" class="w-full border p-2 rounded">
          <option value="">-- Choisir une catégorie --</option>
          <option v-for="c in categories" :key="c" :value="c">{{ c }}</option>
        </select>
        <textarea v-model="notes" placeholder="Notes" class="w-full border p-2 rounded"></textarea>

        <div class="flex justify-end space-x-2">
          <button type="button" @click="$emit('close')" class="bg-gray-300 px-4 py-2 rounded">Annuler</button>
          <button type="submit" class="bg-green-600 text-white px-4 py-2 rounded">
            {{ isEditing ? "Mettre à jour" : "Ajouter" }}
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
