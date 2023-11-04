import axios from "axios";

const apiService = axios.create({
  baseURL: "http://localhost:5050",
  timeout: 90000,
});

export default apiService