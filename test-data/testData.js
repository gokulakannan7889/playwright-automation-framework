// test-data/testData.js
// Centralised test data — keeps tests clean and maintainable

const USERS = {
  validUser: {
    username: 'testuser@example.com',
    password: 'Test@1234',
  },
  invalidUser: {
    username: 'wrong@example.com',
    password: 'WrongPass',
  },
  adminUser: {
    username: 'admin@example.com',
    password: 'Admin@5678',
  },
};

const TODO_ITEMS = {
  single: 'Buy groceries',
  multiple: ['Complete automation task', 'Write test report', 'Review PR', 'Update Confluence docs'],
  longText: 'This is a very long todo item text to test input field character limits and display truncation',
};

const API_ENDPOINTS = {
  users: '/users',
  posts: '/posts',
  comments: '/comments',
};

module.exports = { USERS, TODO_ITEMS, API_ENDPOINTS };
