// tests/api/users.api.spec.js
// Demonstrates: Playwright API testing (no browser needed)
// Uses JSONPlaceholder as a public demo API

const { test, expect } = require('@playwright/test');

const BASE_API = 'https://jsonplaceholder.typicode.com';

test.describe('Users API — CRUD Validation', () => {

  test('@smoke — GET /users should return 200 with list of users', async ({ request }) => {
    const response = await request.get(`${BASE_API}/users`);

    expect(response.status()).toBe(200);

    const users = await response.json();
    expect(Array.isArray(users)).toBeTruthy();
    expect(users.length).toBeGreaterThan(0);
    expect(users[0]).toHaveProperty('id');
    expect(users[0]).toHaveProperty('name');
    expect(users[0]).toHaveProperty('email');
  });

  test('@regression — GET /users/:id should return correct user', async ({ request }) => {
    const response = await request.get(`${BASE_API}/users/1`);

    expect(response.status()).toBe(200);

    const user = await response.json();
    expect(user.id).toBe(1);
    expect(user.name).toBeTruthy();
  });

  test('@regression — POST /posts should create a new resource', async ({ request }) => {
    const payload = {
      title: 'QA Automation Post',
      body: 'Created via Playwright API test',
      userId: 1,
    };

    const response = await request.post(`${BASE_API}/posts`, { data: payload });

    expect(response.status()).toBe(201);

    const created = await response.json();
    expect(created.title).toBe(payload.title);
    expect(created.id).toBeDefined();
  });

  test('@regression — PUT /posts/:id should update a resource', async ({ request }) => {
    const payload = { id: 1, title: 'Updated Title', body: 'Updated body', userId: 1 };

    const response = await request.put(`${BASE_API}/posts/1`, { data: payload });
    expect(response.status()).toBe(200);

    const updated = await response.json();
    expect(updated.title).toBe('Updated Title');
  });

  test('@regression — DELETE /posts/:id should return 200', async ({ request }) => {
    const response = await request.delete(`${BASE_API}/posts/1`);
    expect(response.status()).toBe(200);
  });

  test('@regression — GET invalid endpoint should return 404', async ({ request }) => {
    const response = await request.get(`${BASE_API}/nonexistent`);
    expect(response.status()).toBe(404);
  });

});
