import { test, expect } from '@playwright/test';

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

  const headerButton = page
    .locator('.css-tmjbzx-MuiStack-root')
    .getByRole('button');
  await expect(headerButton).toBeVisible();

  // Assert that at least one post is visible on the feed
  const firstPost = page.locator('.css-nen11g-MuiStack-root').first();
  await expect(firstPost).toBeVisible();
  const profilePic = firstPost.getByAltText('avatar');
  await expect(profilePic).toBeVisible();
  const postImage = firstPost.locator('.css-1mqut64');
  await expect(postImage).toBeVisible();
  const postDetails = firstPost.locator('.css-u5m6zg-MuiStack-root');
  await expect(postDetails.getByRole('paragraph').first()).toContainText(
    'like',
  );
});
