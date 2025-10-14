import axios from "axios";
import Cookies from "js-cookie";

export const axiosInstance = () =>
  axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    headers: {
      "u-x-key": String(Cookies.get("u-x-key")),
    },
  });
