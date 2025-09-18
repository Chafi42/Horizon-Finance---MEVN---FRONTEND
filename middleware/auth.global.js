// middleware/auth.global.js
export default defineNuxtRouteMiddleware((to, from) => {
  const token = process.client ? localStorage.getItem("token") : null

  // Routes protégées : accessibles uniquement si connecté
  const protectedRoutes = ["/dashboard"]

  // Routes publiques : accessibles uniquement si NON connecté
  const publicOnlyRoutes = ["/login", "/register"]

  // 🚨 Cas 1 : utilisateur pas connecté mais essaie d’aller sur une route protégée
  if (protectedRoutes.includes(to.path) && !token) {
    return navigateTo("/login")
  }

  // 🚨 Cas 2 : utilisateur déjà connecté mais essaie d’aller sur login/register
  if (publicOnlyRoutes.includes(to.path) && token) {
    return navigateTo("/dashboard")
  }
})
