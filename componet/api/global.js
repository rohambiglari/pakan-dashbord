import axios from "axios";
import Cookies from "js-cookie";

const config = {
  baseURL: "http://46.209.50.74:4000/", // "/"
  imagePath: "",

  udata: Cookies.get("token"),

  axiosHandle: (headers = {}) => {
    return axios.create({
      baseURL: `${config.baseURL}api/`,

      headers: config.udata
        ? {
            Authorization: "Token " + config.udata,
            accept: "application/json",
            "Content-Type": "application/json",
            ...headers,
          }
        : {
            accept: "application/json",
            "Content-Type": "application/json",
            ...headers,
          },
    });
  },
};

export default config;
