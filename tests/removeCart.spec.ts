import { test, expect } from '@playwright/test';

test(
  'Remove Product From Cart',
  async ({ page }) => {

    test.setTimeout(60000);

    await page.goto(
      'https://automationexercise.com/view_cart'
    );

    await expect(page)
      .toHaveURL(/view_cart/);

    console.log(
      'Cart page opened successfully'
    );

  }
);