import request from "supertest";
import { app } from "../../index";

describe("GET /", () => {
  it("should return the /api endpoint", async () => {
    const response = await request(app).get("/api");
    expect(response.status).toBe(200);
  });
});
