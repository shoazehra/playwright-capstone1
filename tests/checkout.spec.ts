import { test } from '@playwright/test';

test(
  'Checkout Flow',
  async ({ page }) => {

    test.setTimeout(60000);

    await page.goto(
      'https://automationexercise.com/products'
    );

    // wait for product section
    await page.waitForSelector(
      '.product-image-wrapper',
      { timeout: 30000 }
    );

    console.log('Products loaded');

    await page.locator(
      '.add-to-cart'
    ).first().click();

    console.log('Product added');

    await page.waitForTimeout(3000);

    await page.goto(
      'https://automationexercise.com/view_cart'
    );

    console.log('Cart opened');

    await page.waitForTimeout(5000);

    await page.screenshot({
      path: 'screenshots/cart-page.png'
    });

  }
);