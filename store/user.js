// import { defineStore } from "pinia";
// import api from "@/services/userService";

// export const useUserStore = defineStore("user", {
//   state: () => ({
//     user: null,
//     token: null,
//   }),
//   actions: {
//     async login(email, password) {
//       const res = await api.post("/auth/login", { email, password });
//       this.user = res.data.user;
//       this.token = res.data.token;
//     },
//     logout() {
//       this.user = null;
//       this.token = null;
//     }
//   }
// });
