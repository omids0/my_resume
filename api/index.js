import axios from "axios";

export const checkIpAPI = () =>
  axios.get("https://ipwhois.app/json/?objects=country,success,message");
