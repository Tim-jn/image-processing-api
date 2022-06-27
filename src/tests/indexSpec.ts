import request from "supertest";
import { app } from "../index";

describe("Test for index", () => {
  describe("GET /", () => {
    it("should return the / endpoint", async () => {
      const response = await request(app).get("/");
      expect(response.status).toBe(200);
    });
    it("should return the title and the description of the api", async () => {
      const response = await request(app).get("/");
      expect(response.text).toMatch("Welcome to the image processing API !");
    });
  });
});
