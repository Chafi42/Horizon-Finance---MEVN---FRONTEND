<template>
  <div class="app-layout">
    <!-- Sidebar -->
    <aside class="sidebar">
      <h2>Expenses</h2>
      <nav>
        <NuxtLink to="/dashboard">Dashboard</NuxtLink>
        <NuxtLink to="/expenses">Expenses</NuxtLink>
        <NuxtLink to="/profile">Profile</NuxtLink>
      </nav>
    </aside>

    <!-- Main Content -->
    <div class="main-content">
      <!-- Header -->
      <header class="header">
        <h1>{{ pageTitle }}</h1>
        <button @click="logout">Logout</button>
      </header>

      <!-- Page Content -->
      <main class="page">
        <slot />
      </main>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
const router = useRouter();

const pageTitle = ref("Tableau de bord");

const logout = () => {
  const token = useCookie("token");
  token.value = null;
  router.push("/");
};
</script>

<style lang="scss" scoped>
.app-layout {
  display: flex;
  height: 100vh;

  .sidebar {
    width: 220px;
    background: #1e293b;
    color: white;
    padding: 20px;

    h2 {
      margin-bottom: 20px;
    }

    nav {
      display: flex;
      flex-direction: column;

      a {
        color: white;
        margin: 10px 0;
        text-decoration: none;

        &.router-link-exact-active {
          font-weight: bold;
          text-decoration: underline;
        }
      }
    }
  }

  .main-content {
    flex: 1;
    display: flex;
    flex-direction: column;

    .header {
      background: #f8fafc;
      padding: 15px 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #e2e8f0;
    }

    .page {
      flex: 1;
      padding: 20px;
      background: #f1f5f9;
    }
  }
}
</style>
