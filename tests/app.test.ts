import supertest from "supertest";
import { Cards, Users } from "@prisma/client";

import { createUser } from "./factory/userFactory.js"
import { createCard } from "./factory/cardFactory.js"

import server from "../src/index.js";

let token = {};
let user: Users;
let cardId : number = 0;

describe("/POST sign-up", () => {
  it("should return status code 409 trying to add existing user", async () => {
    const newTestUser = await createUser();
    user = newTestUser;

    let sendUser : Partial<Users> = {...user};
    delete sendUser.id;

    const response = await supertest(server).post("/sign-up").send(sendUser);

    expect(response.status).toBe(409);
  })
})

describe("POST /sign-in", () => {
  it("should return status code 200", async () => {

    const response = await supertest(server).post("/sign-in").send({ email: user.email, password: user.password })

    token = response.body.token;

    expect(response.status).toBe(200);
  })
})

describe("GET '/cards'", () => {
  it("should return status code 200 with cards", async () => {
    const { cardId: id } = await createCard(user.id);
    cardId = id;

    const response = await supertest(server).get("/cards").set({ "Authorization": `Bearer ${token}` })

    expect(response.status).toBe(200);
    expect(response.body).toBe<Cards>
  })
})

describe("DELETE '/cards'", () => {
  it("should return status 200 on success", async () => {
    const response = await supertest(server).delete(`/cards/${cardId}`).set({ "Authorization": `Bearer ${token}` })

    expect(response.status).toBe(200);
  })
})