import axios from "axios";
import { toast } from "react-toastify";

const baseURL = import.meta.env.VITE_APP_BASE_API_URL;

const instance = axios.create({
  baseURL,
});

// Sorğu interceptoru əlavə etmək
instance.interceptors.request.use(
  (config) => {
    //  Hər sorğuya token əlavə edirik ve serverde tokeni yoxlayir ve eger token yoxdursa, login sehifesine yonlendirir
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export default instance;

// Cavab interceptoru əlavə etmək
instance.interceptors.response.use(
  (data) => {
    if (data.config.method === "post") {
      toast.success(data.data.message);
    }

    return data.data.data;
  },
  (err) => {
    if (err.response.status === 401) {
      localStorage.removeItem("token");
      location.href = "/login";
    }
  }
);

instance.interceptors.response.use(
  (data) => {
    if (data.config.method === "delete") {
      toast.error(data.data.message);
    }
    if (data.config.method === "post") {
      toast.success(data.data.message);
    }

    return data.data.data;
  },
  (err) => {
    if (err.response.status === 401) {
      localStorage.removeItem("token");
      location.href = "/login";
    }
  }
);
