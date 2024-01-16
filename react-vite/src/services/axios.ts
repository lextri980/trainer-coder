import axios from "axios";

const apiService = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  timeout: 10000,
});

apiService.interceptors.request.use(
  (config) => {
    return config;
  }, 
  (error) => Promise.reject(error)
);

apiService.interceptors.response.use(
  (response) => response,
  (error) => {

    return Promise.reject(error);
  }
);

export default apiService;
