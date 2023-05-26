import { test, expect } from '@playwright/test';
import { loginFlow } from './helpers/login.js';

test('should render home feed', async ({ page }) => {
  await loginFlow(page);

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

test('click post image to navigate to details', async ({ page }) => {
  await loginFlow(page);

  const firstPost = page.locator('.css-j7qwjs').first();
  await expect(firstPost).toBeVisible();
  const postImage = firstPost.locator('.css-1mqut64');
  await expect(postImage).toBeVisible();
  await postImage.click();

  await expect(page).toHaveURL(/.*posts/);

  const titleBar = page.getByRole('paragraph').filter({ hasText: 'Details' });
  await expect(titleBar).toBeVisible();

  const commentInput = page.getByPlaceholder('Comment');
  await expect(commentInput).toBeVisible();
});
