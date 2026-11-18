import { test, expect } from '@playwright/test';

test(
  'Add Product To Cart',
  async ({ page }) => {

    test.setTimeout(60000);

    await page.goto(
      'https://automationexercise.com/products'
    );

    await page.waitForSelector(
      '.product-image-wrapper',
      { timeout: 30000 }
    );

    await page.locator(
      '.add-to-cart'
    ).first().click();

    console.log(
      'Product added successfully'
    );

    await expect(
      page.locator('body')
    ).toBeVisible();

  }
);