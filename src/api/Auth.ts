import axios from "axios";

const API_URL = "http://localhost:8080/auth";

export const login = async (username: string, password: string) => {
  const response = await axios.post(`${API_URL}/login`, { username, password });
  localStorage.setItem("jwt", response.data.token); // Salva o token
};

export const getToken = () => localStorage.getItem("jwt");

export const logout = () => {
  localStorage.removeItem("jwt");
};
