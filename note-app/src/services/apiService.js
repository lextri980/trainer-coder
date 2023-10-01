import axios from "axios";

export const apiService = axios.create({
  baseURL: "https://jsonplaceholder.org",
  timeout: 90000,
});