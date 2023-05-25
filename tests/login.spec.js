import { test, expect } from '@playwright/test';

test('should login', async ({ page }) => {
  await page.goto('https://insta.livepreview.org/login');

  const inputUsername = page.getByLabel('Username');
  await expect(inputUsername).toBeVisible();

  const inputPassword = page.getByLabel('Password');
  await expect(inputPassword).toBeVisible();

  const button = page.getByRole('button');
  await expect(button).toHaveText('Login');

  const signupLink = page.getByRole('link');
  await expect(signupLink).toHaveText('Sign up');

  await signupLink.click();
  await expect(page).toHaveURL(/.*signup/);
});
