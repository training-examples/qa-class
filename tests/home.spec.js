import { test, expect } from '@playwright/test';

// Task 6
// Write an test similar to what we did below, but click on a post image and
// verify that the browser has navigated to the post details page

test('should render home feed', async ({ page }) => {
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

  const titleBar = page.getByRole('paragraph').filter({ hasText: 'Home' });
  await expect(titleBar).toBeVisible();

  const headerButton = page.locator('.css-12vn8rl').getByRole('button');
  await expect(headerButton).toBeVisible();

  // Assert that at least one post is visible on the feed
  const firstPost = page.locator('.css-j7qwjs').first();
  await expect(firstPost).toBeVisible();
  const profilePic = firstPost.getByAltText('avatar');
  await expect(profilePic).toBeVisible();
  const postImage = firstPost.locator('.css-1mqut64');
  await expect(postImage).toBeVisible();
  const postDetails = firstPost.locator('.css-1onl7h3');
  await expect(postDetails.getByRole('paragraph').first()).toContainText(
    'like',
  );
});
