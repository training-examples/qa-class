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

// Task 2
// Use a locator to get the last movie in the movie list
// Before we click on the movie, make an assertion that it displays the release date
// Then click the movie
// Then make an assertion that the browser navigated to the correct details page
