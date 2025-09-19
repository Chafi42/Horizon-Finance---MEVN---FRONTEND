<script setup>
import { ref, onMounted } from "vue"
import ExpenseTable from "@/components/ExpenseTable.vue"
import ExpenseForm from "@/components/ExpenseForm.vue"
import { getExpenses, createExpense, updateExpense, deleteExpense } from "~/services/expenseService"

const expenses = ref([])
const showForm = ref(false)
const editingExpense = ref(null)

const categories = [
  "Logement", "Alimentation", "Transport", "Santé",
  "Divertissement", "Vêtements & Accessoires",
  "Assurance auto", "Réparations & entretien", "Animaux"
]

const loadExpenses = async () => {
  expenses.value = await getExpenses()
}
onMounted(loadExpenses)

const handleSave = async (expense) => {
  if (expense._id) {
    await updateExpense(expense._id, expense)
  } else {
    await createExpense(expense)
  }
  showForm.value = false
  editingExpense.value = null
  await loadExpenses()
}

const handleDelete = async (id) => {
  await deleteExpense(id)
  await loadExpenses()
}
</script>

<template>
  <div class="p-6">
    <ExpenseTable
      :expenses="expenses"
      @addExpense="showForm = true"
      @edit="(e) => { editingExpense = e; showForm = true }"
      @delete="handleDelete"
    />

    <ExpenseForm
      :show="showForm"
      :expense="editingExpense"
      :categories="categories"
      @close="showForm = false; editingExpense = null"
      @save="handleSave"
    />
  </div>
</template>
