import axios from "axios";

const API_BASE_URL = `${import.meta.env.VITE_END_POINT_URL}/`; // Ganti dengan URL API yang sesuai

const ApiService = axios.create({
  baseURL: API_BASE_URL,
});

export default ApiService;
