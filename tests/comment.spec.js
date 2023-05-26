import { test, expect } from '@playwright/test';
import { loginFlow } from './helpers/login.js';

test('add comment', async ({ page }) => {
  await loginFlow(page);

  const firstPost = page.locator('.css-j7qwjs').first();
  await expect(firstPost).toBeVisible();
  const postImage = firstPost.locator('.css-1mqut64');
  await expect(postImage).toBeVisible();
  await postImage.click();

  const commentInput = page.getByPlaceholder('Comment');
  await expect(commentInput).toBeVisible();

  const commentText = `This is a test comment (${Date.now()})`;
  await commentInput.fill(commentText);
  await commentInput.press('Enter');

  const newComment = page.getByText(commentText);
  await expect(newComment).toContainText(commentText);
});
