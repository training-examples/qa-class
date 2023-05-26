import { expect } from '@playwright/test';

export async function loginFlow(page) {
  await page.goto('https://mnog2f-5173.csb.app/login');

  const inputUsername = page.getByLabel('Username');
  await expect(inputUsername).toBeVisible();
  await inputUsername.fill('test');

  const inputPassword = page.getByLabel('Password');
  await expect(inputPassword).toBeVisible();
  await inputPassword.fill('123');

  const button = page.getByRole('button');
  await expect(button).toHaveText('Login');
  await button.click();

  await expect(page).toHaveURL('https://mnog2f-5173.csb.app/');
}
