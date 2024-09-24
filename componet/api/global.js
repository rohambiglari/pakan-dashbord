
// import axios from "axios";
// import Cookies from "js-cookie";

// const config = {
//   // baseURL: 'https://api.clipsho.com/',
//   // baseURLSocket: 'https://chat.clipsho.com/',

//   // baseURL: "http://192.168.115.60:8081/",
//   // baseURL: "/",
//   baseURL:"http://46.209.50.74:4000/",

//   // udata: null,
//   udata:
//     typeof window !== "undefined" &&
//     typeof document !== "undefined" &&
//     Cookies.get("cephToken"),
//   // uAuth:
//   //   typeof window !== "undefined" &&
//   //   typeof document !== "undefined" &&
//   //   Cookies.get("userAuthClipsho"),


//   axiosHandle: (header = null) => {
//     return axios.create({
//       baseURL: `${config.baseURL}api/`,
//       headers: header
//         ? {
//             "GATEWAY-ID": "30",
//             Accept: "application/json",
//             // 'clipsho-theme': `${config.theme}`,
//             mode: "no-cors",
//             "Access-Control-Allow-Origin": "*",
//             withCredentials: false,
//             cache: "default",
//             Authorization: "Bearer " + config.udata,
//             ...header,
//           }
//         : {
//             "GATEWAY-ID": "30",
//             Accept: "application/json",
//             // 'clipsho-theme': `${config.theme}`,
//             mode: "no-cors",
//             "Access-Control-Allow-Origin": "*",
//             withCredentials: false,
//             cache: "default",
//             Authorization: "Bearer " + config.udata,
//           },
//       // headers: {
//       //   Accept: 'application/json',
//       // },
//     });
//   },
// };
// // // console.log("udata", Cookies.get("clipshoToken"))
// export default config;

import axios from "axios";
import Cookies from "js-cookie";

const config = {
  GOOGLE_MAP_KEY: "AIzaSyD4qY6Euzpnu0WSZapPYfSd-R1NZ28c8RU",
  MAP_IR_KEY:
    "&x-api-key=eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImU4Mjg2NDkwM2M0MjllOWNlNDhjODk2MDc1OTQyMTdiZWVjMmNmZWJmOGJiNjA3NjZjYjY4ZTU4NTQ0NjE1Nzk2OTYwM2VlOWM4ZGQyNzg0In0.eyJhdWQiOiI3MTQyIiwianRpIjoiZTgyODY0OTAzYzQyOWU5Y2U0OGM4OTYwNzU5NDIxN2JlZWMyY2ZlYmY4YmI2MDc2NmNiNjhlNTg1NDQ2MTU3OTY5NjAzZWU5YzhkZDI3ODQiLCJpYXQiOjE1NzY2NTQxODQsIm5iZiI6MTU3NjY1NDE4NCwiZXhwIjoxNTc5MTU5Nzg0LCJzdWIiOiIiLCJzY29wZXMiOlsiYmFzaWMiXX0.qX-fcF2UEDjTvcqz-MDxQlSNO7UjjhJZfGBoFRqvEoH_a5Hi-HD7hR_r0L4z7F0rC9d_FZaobc4ChUEYNmZbAthCcDW5ZJX5RWzlc9F-v8rdD2uu7swTgS7VMb5WxP39zsQEAw4q4vPAIboD8kWtYV9D488oqfBug_VYwA5QxRB3_71xrUmk-gObfvD_Tm5ZR3CSHqAdO8zFU8xKj0Xykc8UnpXqUqWG4lFyWO1CqMLrMKyjWWbYQ-HTRvMKRcrjQdGL-DjbPqoxS2dzWtKn7t2LVS3euuzjDFiNt4Xi5vEvMQSfZB7ogri77MsTJdW80XOO8yKnbgOBS0_R2r9AHw",

  // intitGoogleMap: function(callback, options = "") {
  //   const googleMapScript = document.createElement("script");
  //   googleMapScript.defer = true;
  //   googleMapScript.async = true;
  //   googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=${this.GOOGLE_MAP_KEY}${options}`;
  //   window.document.body.appendChild(googleMapScript);
  //   googleMapScript.addEventListener("load", () => {
  //     callback(googleMapScript);
  //   });
  // },
  baseURL: "http://46.209.50.74:4000/", // "/"
  imagePath: "",

  udata: { token: Cookies.get("pakanToken") },
  pdata: null,
  //https://map.ir/search/v2/autocomplete?text=%D8%A2%D8%B2%D8%A7%D8%AF%DB%8C&$filter=province%20eq%20%D8%AA%D9%87%D8%B1%D8%A7%D9%86&x-api-key=eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImU4Mjg2NDkwM2M0MjllOWNlNDhjODk2MDc1OTQyMTdiZWVjMmNmZWJmOGJiNjA3NjZjYjY4ZTU4NTQ0NjE1Nzk2OTYwM2VlOWM4ZGQyNzg0In0.eyJhdWQiOiI3MTQyIiwianRpIjoiZTgyODY0OTAzYzQyOWU5Y2U0OGM4OTYwNzU5NDIxN2JlZWMyY2ZlYmY4YmI2MDc2NmNiNjhlNTg1NDQ2MTU3OTY5NjAzZWU5YzhkZDI3ODQiLCJpYXQiOjE1NzY2NTQxODQsIm5iZiI6MTU3NjY1NDE4NCwiZXhwIjoxNTc5MTU5Nzg0LCJzdWIiOiIiLCJzY29wZXMiOlsiYmFzaWMiXX0.qX-fcF2UEDjTvcqz-MDxQlSNO7UjjhJZfGBoFRqvEoH_a5Hi-HD7hR_r0L4z7F0rC9d_FZaobc4ChUEYNmZbAthCcDW5ZJX5RWzlc9F-v8rdD2uu7swTgS7VMb5WxP39zsQEAw4q4vPAIboD8kWtYV9D488oqfBug_VYwA5QxRB3_71xrUmk-gObfvD_Tm5ZR3CSHqAdO8zFU8xKj0Xykc8UnpXqUqWG4lFyWO1CqMLrMKyjWWbYQ-HTRvMKRcrjQdGL-DjbPqoxS2dzWtKn7t2LVS3euuzjDFiNt4Xi5vEvMQSfZB7ogri77MsTJdW80XOO8yKnbgOBS0_R2r9AHw

  mapHandle: () => {
    return axios.create({
      baseURL: `https://map.ir/`,

      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "accept, content-type",
        Accept: "application/json",
        "Content-Type": "multipart/form-data",
        "x-api-key":
          "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImU4Mjg2NDkwM2M0MjllOWNlNDhjODk2MDc1OTQyMTdiZWVjMmNmZWJmOGJiNjA3NjZjYjY4ZTU4NTQ0NjE1Nzk2OTYwM2VlOWM4ZGQyNzg0In0.eyJhdWQiOiI3MTQyIiwianRpIjoiZTgyODY0OTAzYzQyOWU5Y2U0OGM4OTYwNzU5NDIxN2JlZWMyY2ZlYmY4YmI2MDc2NmNiNjhlNTg1NDQ2MTU3OTY5NjAzZWU5YzhkZDI3ODQiLCJpYXQiOjE1NzY2NTQxODQsIm5iZiI6MTU3NjY1NDE4NCwiZXhwIjoxNTc5MTU5Nzg0LCJzdWIiOiIiLCJzY29wZXMiOlsiYmFzaWMiXX0.qX-fcF2UEDjTvcqz-MDxQlSNO7UjjhJZfGBoFRqvEoH_a5Hi-HD7hR_r0L4z7F0rC9d_FZaobc4ChUEYNmZbAthCcDW5ZJX5RWzlc9F-v8rdD2uu7swTgS7VMb5WxP39zsQEAw4q4vPAIboD8kWtYV9D488oqfBug_VYwA5QxRB3_71xrUmk-gObfvD_Tm5ZR3CSHqAdO8zFU8xKj0Xykc8UnpXqUqWG4lFyWO1CqMLrMKyjWWbYQ-HTRvMKRcrjQdGL-DjbPqoxS2dzWtKn7t2LVS3euuzjDFiNt4Xi5vEvMQSfZB7ogri77MsTJdW80XOO8yKnbgOBS0_R2r9AHw",
      },
    });
  },

  axiosHandle: (headers = {}) => {
    return axios.create({
      baseURL: `${config.baseURL}api/`,
      // baseURL: `api/`,

      headers:
        config.udata && config.udata.token
          ? {
              Authorization: "Token " + config.udata.token,
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
  axiosHandleBase: () => {
    return axios.create({
      baseURL: `${config.baseURL}api/`,
      // baseURL: `api/`,
      // withCredentials: true, // Allows sending cookies with the request
      headers:
        config.udata && config.udata.token
          ? {
              Authorization: "Token " + config.udata.token,
              accept: "application/json",
              // "Access-Control-Allow-Origin":"*",
              "Content-Type": "application/json",
            }
          : {
              accept: "application/json",
              // "Access-Control-Allow-Origin":"*",
              "Content-Type": "application/json",
            },
    });
  },
  getError: (data) => {
    if (!data.response || !data.response.data) {
      return null;
    }
    const response = data.response.data;

    if (response && response.non_field_errors) {
      return response.non_field_errors[0];
    }

    if (Array.isArray(response) && response.length > 0) {
      return response[0];
    }
    if (
      typeof response === "object" &&
      Object.values(response)[0] &&
      Object.values(response)[0][0]
    ) {
      return Object.values(response)[0][0];
    }

    return "خطا سرور قابل تعیین نمی باشد";
  },
  setAuth: (user) => {
    if (typeof window !== "undefined") {
      if (typeof user === "object" && user !== null && user.token) {
        localStorage?.setItem("user", JSON.stringify(user));
        Cookies?.set("pakanToken", user.token);

        config.udata = user;
      } else {
        console.log("user problem");
      }
    }
  },
  setProfile: (profile) => {
    if (typeof window !== "undefined") {
      if (typeof profile === "object") {
        localStorage?.setItem("profile", JSON.stringify(profile));

        config.pdata = profile;
      } else {
        console.log("profile problem");
      }
    }
  },
  logoutUser: () => {
    if (typeof window !== "undefined") {
      localStorage?.removeItem("user");
      localStorage?.removeItem("profile");
      Cookies?.remove("pakanToken");
      config.udata = null;
    }
  },
  getUser: () => {
    if (typeof window !== "undefined") {
      // if (Cookies?.get("user")) {
      //   return JSON.parse(Cookies?.get("user"));
      // } else {
      //   return null;
      // }
      if (localStorage?.getItem("user")) {
        return JSON.parse(localStorage?.getItem("user"));
      } else {
        return null;
      }
    }
  },
  getProfile: () => {
    if (typeof window !== "undefined") {
      // if (Cookies?.get("profile")) {
      //   return JSON.parse(Cookies?.get("profile"));
      // } else {
      //   return null;
      // }
      if (localStorage?.getItem("profile")) {
        return JSON.parse(localStorage?.getItem("profile"));
      } else {
        return null;
      }
    }
  },
  checkAuth: () => {
    const user = config.getUser();
    if (user && user.token) {
      config.udata = user;
      return true;
    } else {
      return false;
    }
  },
  checkAccess: (roles) => {
    const user = config.getUser();
    if (Array.isArray(roles)) {
      return roles.some((r) => user.roles.includes(r));
    } else {
      return false;
    }
  },
  formatNumber: function (input) {
    if (input) {
      return input.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    } else {
      return "";
    }
  },
  removeFormatNumber: function (input) {
    if (input) {
      return input.toString().replace(/,/g, "");
    } else {
      return "";
    }
  },
  enNumToFa: (n) => {
    const farsiDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
    // if (typeof n === "string") {
    //   for (var i = 0; i < 10; i++) {
    //     n = n.replace(farsiDigits[i], i);
    //   }
    // } else {
    //   return n;
    // }
    return n.toString().replace(/\d/g, (x) => farsiDigits[x]);
  },
  faNumToEn: (str) => {
    //const farsiDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
    const farsiDigits = [
      /۰/g,
      /۱/g,
      /۲/g,
      /۳/g,
      /۴/g,
      /۵/g,
      /۶/g,
      /۷/g,
      /۸/g,
      /۹/g,
    ];
    // if (typeof n === "string") {
    //   for (var i = 0; i < 10; i++) {
    //     n = n.replace(farsiDigits[i], i);
    //   }
    // } else {
    //   return n;
    // }
    if (typeof str === "string") {
      for (var i = 0; i < 10; i++) {
        str = str.replace(farsiDigits[i], i);
      }
    }
    return str;
  },
  separator: (n) => {
    let digit = n.toString().split(".");
    digit[0] = digit[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return digit.join(".");
  },
  onlyNum: (n) => {
    const reg = /^[0-9]+$/;
    if (n.match(reg)) {
      return n;
    } else {
      return n.replace(/\D/g, "");
    }
  },
  com: (n) => {
    // const farsiDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
    let test = parseInt(n.replace(/\D/g, ""));
    return test.toLocaleString();
    // let sept = n.split(".");
    // sept[0] = sept[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    // let joint = sept.join(".");
    // let digit = joint.toString().replace(/\d/g, x => farsiDigits[x]);
    // return digit;
  },
  STATE: {
    0: "در حال بررسی",
    10: "دریافت شد",
    11: "در حال انجام",
    20: "در حال انجام",
    40: "انجام شد",
    45: "ارسال شد",
    50: "ارسال شد",
    51: "تحویل داده شد",
  },
  // constants
  REQUEST_TRACK_DONE: 40,
  REQUEST_TRACK_BRANCH_DONE: 48,
  REQUEST_TRACK_DELIVERED: 51,
  INVOICE_STATUS_NEW: 1,
  INVOICE_STATUS_PAID: 10,
  INVOICE_STATUS_CANCELED: 2,
  INVOICE_STATUS_CONFIRMED: 5,

  TRACK_UNKNOWN: 0,
  TRACK_PICKED_UP: 11,
  TRACK_IN_PROGRESS: 20,
  TRACK_DONE: 40,
  TRACK_RETURNED_TO_STORE: 43,
  TRACK_EXIT: 45,
  TRACK_DELIVERED: 51,

  INVOICE_DETAIL_TRACK_DONE: 40,
  INVOICE_DETAIL_TRACK_RETURNED: 38,

  REQUEST_STATUS: {
    1: "درحال بررسی",
    2: "لغو شد",
    5: "تأیید شد",
  },
  REQUEST_TRACK: {
    0: "ناشناخته",
    10: "دریافت شد",
    11: "دریافت شد",
    20: "در حال انجام",
    50: "ارسال شد",
    51: "تحویل داده شد",
    40: "انجام شد",
    45: "خروج از شعبه",
  },
  NOTES: {
    TRANSFER: "بزودی منتقل می شوید",
    PROGRESS: "لطفا صبر کنید",
    EMAIL: "ایمیل ضروری می باشد",
    EMAIL_CODE_GENERATE: " لینک فعالسازی به ایمیل شما ارسال شد. ",
    EMAIL_NOT_CONFIRM: " آدرس ایمیل تایید نشده است  ",
    REQUIRE_ALL: "پرکردن همه موارد لازمست.",
    REGISTER_SUCCESS: "به خانواده پاکان خوش آمدید.",
    LOGIN_SUCCESS: "سلام! خوش آمدید",
    RESET_PASS_SUCCESS: "کلمه عبور با موفقیت تغییر کرد. ",
    NETWORK: " اینترنت فعال نمی باشد ",
    SAVE: " اطلاعات شما با موفقیت ثبت شد.  ",
    REGISTER_CODE_REQUIRED: "وارد کردن کد فعال‌سازی لازمست.",
    REGISTER_MIN_PASS_REQUIRED: "کلمه عبور باید حداقل چهار کاراکتر باشد.",
    REGISTER_PROCESS_ERROR: "خطا هنگام پردازش لطفا دقایقی بعد تلاشش نمایید",
    RESET_CODE_WRONG: "کد فعال‌سازی اشتباهست!",
    RESET_REAPEATPASS_WRONG: "تکرار کلمه عبور صحیح نمی باشد.",
    REMOVE_ADDRESS: "نشانی مورد نظر با موفقیت حذف شد.",
    ADDRESS_ADD_SUCCESS: "نشانی با موفقیت ثبت شد. ",
  },
};

export default config;
