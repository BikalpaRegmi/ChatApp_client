import axios, { AxiosInstance } from "axios";

// axios.defaults.withCredentials = true;

const instance: AxiosInstance = axios.create({
  baseURL:
    "https://ecommerceappmern.onrender.com" || "http://localhost:3333/api",
});

export default instance;
