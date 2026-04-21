// pages/BasePage.js
// All page objects extend this — shared utilities & common actions

class BasePage {
  constructor(page) {
    this.page = page;
  }

  async navigate(path = '') {
    await this.page.goto(path);
  }

  async getTitle() {
    return await this.page.title();
  }

  async waitForElement(locator, timeout = 5000) {
    await locator.waitFor({ state: 'visible', timeout });
  }

  async clickElement(locator) {
    await this.waitForElement(locator);
    await locator.click();
  }

  async fillInput(locator, value) {
    await this.waitForElement(locator);
    await locator.clear();
    await locator.fill(value);
  }

  async getText(locator) {
    await this.waitForElement(locator);
    return await locator.textContent();
  }

  async isVisible(locator) {
    return await locator.isVisible();
  }

  async takeScreenshot(name) {
    await this.page.screenshot({ path: `reports/screenshots/${name}.png`, fullPage: true });
  }
}

module.exports = { BasePage };
