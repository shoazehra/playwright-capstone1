import { test, expect } from '../fixtures/baseFixture';

test(
  'Search Product',
  async ({ page, productPage }) => {

    test.setTimeout(60000);

    await page.goto(
      'https://automationexercise.com/products'
    );

    await page.waitForSelector(
      '#search_product',
      { timeout: 30000 }
    );

    await productPage.searchProduct(
      'Blue Top'
    );

    await expect(
      page.locator('#search_product')
    ).toHaveValue('Blue Top');

  }
);
