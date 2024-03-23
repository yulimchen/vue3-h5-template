import Cookies from "js-cookie";

// cookie key 前缀
const keyPrefix = "vue3_h5_template_";

export function getCookie(key: string) {
  return Cookies.get(`${keyPrefix}${key}`);
}

export function setCookie(key: string, value: string) {
  Cookies.set(`${keyPrefix}${key}`, value, { expires: 30 });
}

export function removeCookie(key: string) {
  return Cookies.remove(`${keyPrefix}${key}`);
}
