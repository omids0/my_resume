import Cookies from "js-cookie";

export const getUserLang = () => Cookies.get("user-lang");
