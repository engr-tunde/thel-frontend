import { axiosInstance } from "./client";
import Cookies from "js-cookie";

export const fetcher = (url) =>
  axiosInstance()
    .get(url, { withCredentials: true })
    .then((res) => {
      if (res.status === 401) {
        Cookies.remove("u-x-key");
        window.location.href = "/login";
      }
      return res.data;
    })
    .catch((err) => {
      if (err.response.status === 401) {
        Cookies.remove("u-x-key");
        window.location.href = "/login";
      }
      throw Error(err);
    });

export const sesionFetcher = (url) =>
  axiosInstance()
    .get(url, { withCredentials: true })
    .then((res) => {
      if (res.status === 200) {
        return res.data;
      } else if (res.status === 401) {
        Cookies.remove("u-x-key");
        return null;
      }
    })
    .catch((err) => {
      if (err.response.status === 401) {
        Cookies.remove("u-x-key");
        return null;
      }
      throw Error(err);
    });
