// @ts-check
import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('http://127.0.0.1:5173/');

  // Expect the title to be "Movies"
  await expect(page).toHaveTitle('Movies');
});

test('click movie link', async ({ page }) => {
  await page.goto('http://127.0.0.1:5173/');

  // Click the first movie
  await page.getByRole('link').first().click();

  // Expect the title to be "Movie Details"
  await expect(page).toHaveTitle('Movie Details');
});
