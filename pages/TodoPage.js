// pages/TodoPage.js
// Page Object for TodoMVC — demo app used for framework showcase

const { BasePage } = require('./BasePage');

class TodoPage extends BasePage {
  constructor(page) {
    super(page);

    // Locators — all in one place, easy to maintain
    this.newTodoInput   = page.getByPlaceholder('What needs to be done?');
    this.todoItems      = page.locator('.todo-list li');
    this.toggleAll      = page.locator('#toggle-all');
    this.clearCompleted = page.getByRole('button', { name: 'Clear completed' });
    this.itemsLeftLabel = page.locator('.todo-count');
    this.filterAll      = page.getByRole('link', { name: 'All' });
    this.filterActive   = page.getByRole('link', { name: 'Active' });
    this.filterCompleted = page.getByRole('link', { name: 'Completed' });
  }

  async addTodo(text) {
    await this.fillInput(this.newTodoInput, text);
    await this.page.keyboard.press('Enter');
  }

  async addMultipleTodos(items) {
    for (const item of items) {
      await this.addTodo(item);
    }
  }

  async completeTodo(index) {
    await this.todoItems.nth(index).locator('.toggle').click();
  }

  async deleteTodo(index) {
    const item = this.todoItems.nth(index);
    await item.hover();
    await item.locator('.destroy').click();
  }

  async getItemsLeftCount() {
    const text = await this.getText(this.itemsLeftLabel);
    return parseInt(text.match(/\d+/)[0]);
  }

  async filterByStatus(status) {
    const filters = { all: this.filterAll, active: this.filterActive, completed: this.filterCompleted };
    await this.clickElement(filters[status]);
  }

  async getTodoCount() {
    return await this.todoItems.count();
  }
}

module.exports = { TodoPage };
