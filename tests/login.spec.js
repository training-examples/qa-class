import { test, expect } from '@playwright/test';

test('should login', async ({ page }) => {
  await page.goto('https://insta.livepreview.org/login');

  const inputUsername = page.getByLabel('Username');
  await expect(inputUsername).toBeVisible();

  const inputPassword = page.getByLabel('Password');
  await expect(inputPassword).toBeVisible();

  const button = page.getByRole('button');
  await expect(button).toHaveText('Login');

  // Task 4
  // Use the .fill() action on both the username and the password field to fill
  // out the login form.
  // Then use the .click() action on the login button.
  // Note: A login you can use is test with password 123
});
