import { expect, describe, it, beforeEach } from "vitest";
import request from "supertest";
import { app } from "../index.ts";
import seedDatabase from "./seed.ts";
import seedData from "./seedData.ts";

beforeEach(async () => {
    await seedDatabase();
});


describe('test server endpoints', () => {
    it('should return hello world', async () => {
        const response = await request(app).get('/');
        expect(response.status).toBe(200);
        expect(response.text).toBe('Hello World!');
    })

    it('should return a list of users', async () => {
        const response = await request(app).get('/user/all');
        expect(response.status).toBe(200);
        expect(response.body).toEqual(seedData);

        console.log(response.body);
    })
})

