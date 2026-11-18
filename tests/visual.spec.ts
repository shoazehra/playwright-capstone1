import { test, expect } from '@playwright/test';

test(
  'Homepage Visual Test',
  async ({ page }) => {

    await page.goto(
      'https://automationexercise.com'
    );

    await page.waitForTimeout(
  5000
);

    await expect(page).toHaveScreenshot(
      'homepage.png',
      {
        maxDiffPixelRatio: 0.3
      }
    );

  }
);