<script setup>
import { ref, watch } from "vue"

const props = defineProps({
  show: Boolean,
  expense: { type: Object, default: null },
  categories: { type: Array, required: true }
})

const emits = defineEmits(["close", "save"])

const title = ref("")
const amount = ref("")
const category = ref("")
const notes = ref("")

watch(
  () => props.expense,
  (val) => {
    if (val) {
      title.value = val.title
      amount.value = val.amount
      category.value = val.category
      notes.value = val.notes || ""
    } else {
      title.value = ""
      amount.value = ""
      category.value = ""
      notes.value = ""
    }
  },
  { immediate: true }
)

const handleSubmit = () => {
  if (!title.value || !amount.value || !category.value) return
  emits("save", {
    ...props.expense,
    title: title.value,
    amount: Number(amount.value),
    category: category.value,
    notes: notes.value
  })
}
</script>

<template>
  <div v-if="show" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
    <div class="bg-white rounded-lg shadow-lg w-full max-w-md p-6">
      <h3 class="text-lg font-bold mb-4">
        {{ expense ? "✏️ Modifier la dépense" : "➕ Ajouter une dépense" }}
      </h3>

      <form @submit.prevent="handleSubmit" class="space-y-4">
        <input v-model="title" placeholder="Titre" class="w-full p-2 border rounded" />
        <input v-model="amount" type="number" placeholder="Montant" class="w-full p-2 border rounded" />
        <select v-model="category" class="w-full p-2 border rounded">
          <option value="">-- Choisir une catégorie --</option>
          <option v-for="c in categories" :key="c" :value="c">{{ c }}</option>
        </select>
        <textarea v-model="notes" placeholder="Notes (optionnel)" class="w-full p-2 border rounded"></textarea>

        <div class="flex justify-end gap-2">
          <button type="button" @click="$emit('close')" class="px-4 py-2 bg-gray-300 rounded">Annuler</button>
          <button type="submit" class="px-4 py-2 bg-green-600 text-white rounded">
            {{ expense ? "Mettre à jour" : "Ajouter" }}
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
