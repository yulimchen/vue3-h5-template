import { defineMock } from "vite-plugin-mock-dev-server";
import Mock from "mockjs";

export default defineMock([
  {
    url: "/dev-api/list/get",
    delay: 500,
    body: {
      code: 200,
      message: "OK",
      result: Mock.mock({
        "list|10": [
          {
            "id|+1": 1
          }
        ]
      })
    }
  },
  {
    url: "/dev-api/list/error",
    delay: 500,
    body: {
      code: 40010,
      message: "ERROR",
      result: null
    }
  }
]);
