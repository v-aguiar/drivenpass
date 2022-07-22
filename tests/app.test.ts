import supertest from "supertest";

import server from "../src/index.js";
import { createUser } from "./factory/userFactory.js"

describe("POST /sign-in", () => {
  it("should return status code 200", async () => {
    const user = await createUser();

    const response = await supertest(server).post("/sign-in").send({ email: user.email, password: user.password })

    expect(response.status).toBe(200);
  })
})

