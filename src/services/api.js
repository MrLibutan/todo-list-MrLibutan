import axios from "axios";
import { BASE_URL } from "../utils/constants";

export async function login({ email, password }) {
  try {
    if (!email || !password) throw new Error("Inputs are required");
    const res = await axios.get(
      `${BASE_URL}/users?email=${email}&password=${password}`
    );
    const users = res.data;

    if (users.length <= 0) throw new Error("Invalid credentials");

    const user = res.data[0];

    // Dummy session
    localStorage.setItem("userId", user.id);

    return user;
  } catch (err) {
    throw new Error(err.message);
  }
}

export function logout() {
  localStorage.removeItem("userId");
}

export async function getCurrentUser() {
  try {
    const userId = localStorage.getItem("userId");
    if (!userId) return null;

    const res = await axios.get(`${BASE_URL}/users/${userId}`);
    const user = res.data;

    return user;
  } catch (err) {
    throw new Error(err.message);
  }
}

export async function updateTodo({ userId, updatedProps }) {
  console.log(updatedProps);
  try {
    const res = await axios.patch(`${BASE_URL}/users/${userId}`, updatedProps);

    return res.data;
  } catch (err) {
    throw new Error(err.message);
  }
}
