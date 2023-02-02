import { request } from "@/utils/request";

export type ListResult<T> = {
  code: number;
  message: string;
  result?: T;
};

export function getListApi(params?: object) {
  return request({
    url: "/list/get",
    method: "get",
    params
  });
}
