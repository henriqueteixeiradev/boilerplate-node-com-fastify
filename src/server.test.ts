import { test, expect } from "vitest";
import { app } from "./app";

test("GET /health-check should return status OK", async () => {
  const response = await app.inject({
    method: "GET",
    url: "/",
  });

  expect(response.statusCode).toBe(200);
  expect(response.body).toBe("Hello World");
});
