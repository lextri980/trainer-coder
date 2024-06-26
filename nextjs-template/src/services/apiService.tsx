import { getLocal, removeManyStorage, setLocal } from "@/utils";
import axios, {
  AxiosError,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";

const apiService = axios.create({
  baseURL: process.env.BASE_URL,
  timeout: 20000,
  headers: {
    Accept: "application/json",
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/x-www-form-urlencoded",
  },
});

apiService.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    let token;
    const authenCookie = getLocal("token");
    if (authenCookie) {
      token = `Bearer ${authenCookie}`;
    }
    config.headers.Authorizations = token;
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor for API calls
apiService.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    switch (error.response?.status) {
      case 401:
        removeManyStorage(["token", "user"]);
        // store.dispatch(logoutRequest());
        window.location.pathname = "/auth/login";
        setLocal("unauthorized", JSON.stringify(error.response));
        break;
      case 500:
        console.log("in");
        break;
      default:
        break;
    }
    return Promise.reject(error);
  }
);

export default apiService;
