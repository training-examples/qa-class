import { test, expect } from '@playwright/test';
import { loginFlow } from './helpers/login.js';

test('create new post', async ({ page }) => {
  await loginFlow(page);

  const headerButton = page.locator('.css-12vn8rl').getByRole('button');
  await expect(headerButton).toBeVisible();
  await headerButton.click();

  await expect(page).toHaveURL('https://mnog2f-5173.csb.app/posts/new');

  await page.locator('#file-picker').setInputFiles('example-photo.jpg');

  await expect(page.locator('.css-1mqut64')).toBeVisible();

  const captionText = `This is a test post (${Date.now()})`;
  await page.getByPlaceholder('Caption').fill(captionText);

  await page.getByRole('button', { name: 'Share Now' }).click();

  await expect(page).toHaveURL('https://mnog2f-5173.csb.app/');

  await expect(page.getByText(captionText)).toBeVisible();
});
