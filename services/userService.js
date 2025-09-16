// services/userService.js
import { $fetch } from 'ofetch'

const API_URL = "http://localhost:5000/api/users";

export const registerUser = async (payload) => {
  return await $fetch(`${API_URL}/register`, {
    method: "POST",
    body: payload,
  });
};

export const loginUser = async (payload) => {
  return await $fetch(`${API_URL}/login`, {
    method: "POST",
    body: payload,
  });
};

export const getUsers = async (token) => {
  return await $fetch(API_URL, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
