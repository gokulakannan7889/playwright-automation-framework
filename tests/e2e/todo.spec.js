// tests/e2e/todo.spec.js
// Demonstrates: POM usage, tagging, grouping, assertions

const { test, expect } = require('@playwright/test');
const { TodoPage } = require('../../pages/TodoPage');

test.describe('TodoMVC — Core Functionality', () => {

  let todoPage;

  test.beforeEach(async ({ page }) => {
    todoPage = new TodoPage(page);
    await todoPage.navigate('/');
  });

  // ──────────────────────────────────────────
  // SMOKE TESTS — run on every deployment
  // ──────────────────────────────────────────

  test('@smoke — should load the app successfully', async ({ page }) => {
    await expect(page).toHaveTitle(/TodoMVC/);
    await expect(todoPage.newTodoInput).toBeVisible();
  });

  test('@smoke — should add a new todo item', async () => {
    await todoPage.addTodo('Buy groceries');
    expect(await todoPage.getTodoCount()).toBe(1);
  });

  // ──────────────────────────────────────────
  // REGRESSION TESTS — full suite
  // ──────────────────────────────────────────

  test('@regression — should add multiple todo items', async () => {
    const items = ['Task A', 'Task B', 'Task C'];
    await todoPage.addMultipleTodos(items);
    expect(await todoPage.getTodoCount()).toBe(3);
  });

  test('@regression — should mark a todo as completed', async () => {
    await todoPage.addTodo('Complete this task');
    await todoPage.completeTodo(0);

    const item = todoPage.todoItems.nth(0);
    await expect(item).toHaveClass(/completed/);
  });

  test('@regression — should delete a todo item', async () => {
    await todoPage.addTodo('Item to delete');
    await todoPage.deleteTodo(0);
    expect(await todoPage.getTodoCount()).toBe(0);
  });

  test('@regression — should filter active todos', async () => {
    await todoPage.addMultipleTodos(['Active Task', 'Done Task']);
    await todoPage.completeTodo(1);
    await todoPage.filterByStatus('active');
    expect(await todoPage.getTodoCount()).toBe(1);
  });

  test('@regression — items left counter should update correctly', async () => {
    await todoPage.addMultipleTodos(['A', 'B', 'C']);
    await todoPage.completeTodo(0);
    const count = await todoPage.getItemsLeftCount();
    expect(count).toBe(2);
  });

});
