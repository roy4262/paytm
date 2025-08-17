// Centralized Axios client for production/development
import axios from "axios";

// Prefer Vite env var; fallback to window env; default to localhost
const baseURL =
  import.meta?.env?.VITE_API_BASE_URL ||
  (typeof window !== "undefined" && window.__API_BASE_URL__) ||
  "http://localhost:4000";

const api = axios.create({
  baseURL: `${baseURL}/api/v1`,
});

// Attach token automatically
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers = config.headers || {};
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
