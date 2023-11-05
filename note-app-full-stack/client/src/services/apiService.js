import axios from "axios";

const apiService = axios.create({
  baseURL: "http://localhost:5050",
  timeout: 90000,
});

const defaultHeader = {
  Accept: "application/json",
  "Content-Type": "application/x-www-form-urlencoded",
};

// Add a request interceptor
apiService.interceptors.request.use(
  (config) => {
    let accessToken = `Bearer ${localStorage["token"]}`;
    if (localStorage["token"]) {
      config.headers = {
        ...defaultHeader,
        authorizations: accessToken,
      };
    } else {
      config.headers = {
        ...defaultHeader,
      };
    }
    return config;
  },
  (error) => {
    // Do something with request error
    console.log("error", error);
    return Promise.reject(error);
  }
);

// Add a response interceptor
apiService.interceptors.response.use(
  (response) => {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return Promise.resolve(response);
  },
  (error) => {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

export default apiService;
