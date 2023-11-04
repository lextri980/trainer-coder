import apiService from "../services/apiService";

const defaultHeader = {
  Accept: "application/json",
  "Content-Type": "application/x-www-form-urlencoded",
};

// Add a request interceptor
apiService.interceptors.request.use(
  (config) => {
    console.log('saduas9dhasuhasudashui')
    let accessToken = `Bearer ${localStorage["token"]}`
    if (localStorage["token"]) {
      token = localStorage["token"]
      config.headers = {
        ...defaultHeader,
        Authorization: accessToken,
      };
    } else {
      console.log(token)
      config.headers = {
        ...defaultHeader,
      };
    }
    return config;
  },
  (error) => {
    // Do something with request error
    console.log('error', error)
    return Promise.reject(error);
  }
);

// Add a response interceptor
apiService.interceptors.response.use(
  (response) => {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  (error) => {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);
