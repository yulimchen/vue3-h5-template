import { http } from "@/utils/http";

type ListResult = {
  code: number;
  message: string;
  list: Array<any>;
};

export function getListApi(params?: object): Promise<ListResult> {
  return http.request({
    url: "/list/get",
    method: "get",
    params
  });
}

export function getListApiError(data?: object): Promise<ListResult> {
  return http.request({
    url: "/list/error",
    method: "post",
    data
  });
}
