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

test('click specific movie', async ({ page }) => {
  await page.goto('http://127.0.0.1:5173/');

  await page.getByText('John Wick: Chapter 4').click();

  await expect(page.getByRole('heading')).toHaveText('John Wick: Chapter 4');

  await expect(page.getByRole('paragraph')).toContainText(
    'With the price on his head ever increasing',
  );
});

test('check last movie in list', async ({ page }) => {
  await page.goto('http://127.0.0.1:5173/');

  const lastLink = page.getByRole('link').last();

  await expect(lastLink).toContainText('Release Date');

  await lastLink.click();

  await expect(page).toHaveTitle('Movie Details');

  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Scream');
});
