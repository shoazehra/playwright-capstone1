import { test, expect } from '@playwright/test';

test(
  'Order Placement Validation',
  async ({ page }) => {

    await page.goto(
      'https://automationexercise.com'
    );

    await expect(
      page.locator('body')
    ).toBeVisible();

  }
);