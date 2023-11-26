import { http } from "@/utils/http";

export function getListApi(params) {
  return http.request({
    url: "/list/get",
    method: "get",
    params
  });
}

export function getListApiError(params) {
  return http.request({
    url: "/list/error",
    method: "post",
    params
  });
}
