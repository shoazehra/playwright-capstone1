import { test } from '@playwright/test';

test(
  'Mock Product API',
  async ({ page }) => {

    await page.route(
      '**/products*',
      async route => {

        await route.fulfill({
          status: 200,
          body: JSON.stringify({
            products: []
          })
        });

      }
    );

    await page.goto(
      'https://automationexercise.com/products'
    );

  }
);