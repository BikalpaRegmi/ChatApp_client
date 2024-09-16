import axios, { AxiosInstance } from "axios";

axios.defaults.withCredentials = true;

const instance: AxiosInstance = axios.create({
  baseURL: "http://localhost:3333" || "https://ecommerceappmern.onrender.com",
});

export default instance;
