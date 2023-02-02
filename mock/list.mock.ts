import { defineMock } from "vite-plugin-mock-dev-server";
import Mock from "mockjs";

export default defineMock({
  url: "/dev-api/list/get",
  delay: 1000,
  body: {
    code: 0,
    message: "OK",
    result: Mock.mock({
      "list|10": [
        {
          "id|+1": 1
        }
      ]
    })
  }
});
