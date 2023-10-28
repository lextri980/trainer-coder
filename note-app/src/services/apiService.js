import axios from "axios";

const apiService = axios.create({
  baseURL: "https://jsonplaceholder.org",
  timeout: 90000,
});

export default apiService