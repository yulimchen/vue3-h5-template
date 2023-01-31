import { request } from "@/utils/request";

export function getList(params?: object) {
  return request({
    url: "/posts",
    method: "get",
    params
  });
}
