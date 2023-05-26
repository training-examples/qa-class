import { test, expect } from '@playwright/test';
import { loginFlow } from './helpers/login.js';

test('should login', async ({ page }) => {
  await loginFlow(page);
});
