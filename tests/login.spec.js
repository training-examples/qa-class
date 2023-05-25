import { test, expect } from '@playwright/test';

test('should login', async ({ page }) => {
  await page.goto('https://login.mailchimp.com/');

  const inputUsername = page.getByLabel('Username or Email');
  await expect(inputUsername).toBeVisible();
  await inputUsername.fill(process.env.MAILCHIMP_USERNAME);

  const inputPassword = page.getByLabel('Password');
  await expect(inputPassword).toBeVisible();
  await inputPassword.fill(process.env.MAILCHIMP_PASSWORD);

  const button = page.getByRole('button', { name: 'Log in' });
  await expect(button).toContainText('Log in');
  await button.click();

  await expect(page).toHaveURL(
    'https://us21.admin.mailchimp.com/login/verify/',
  );
});
