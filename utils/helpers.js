// utils/helpers.js
// Reusable utility functions across the framework

const { expect } = require('@playwright/test');

/**
 * Wait for a network response matching a URL pattern
 */
async function waitForApiResponse(page, urlPattern, action) {
  const [response] = await Promise.all([
    page.waitForResponse(resp => resp.url().includes(urlPattern)),
    action(),
  ]);
  return response;
}

/**
 * Generate a random string — useful for unique test data
 */
function randomString(length = 8) {
  return Math.random().toString(36).substring(2, 2 + length);
}

/**
 * Generate a random email address
 */
function randomEmail() {
  return `test_${randomString(6)}@qa-demo.com`;
}

/**
 * Format date to YYYY-MM-DD
 */
function formatDate(date = new Date()) {
  return date.toISOString().split('T')[0];
}

/**
 * Retry a function N times before failing
 */
async function retryAction(fn, retries = 3, delay = 1000) {
  for (let i = 0; i < retries; i++) {
    try {
      return await fn();
    } catch (err) {
      if (i === retries - 1) throw err;
      await new Promise(res => setTimeout(res, delay));
    }
  }
}

/**
 * Soft assert multiple conditions — all checked before failing
 */
function softAssert(page) {
  return expect.soft(page);
}

module.exports = { waitForApiResponse, randomString, randomEmail, formatDate, retryAction, softAssert };
