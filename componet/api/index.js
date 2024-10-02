import config from "./global.js";
const Api = {
  logIn: (body) => {
    return config.axiosHandle().post("token/", body);
  },

  getBalance: () => {
    return config.axiosHandle().get("/v0.1/accounting/get_balance");
  },
};
export default Api;
