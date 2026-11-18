import { BasePage } from './BasePage';

export class ProductPage extends BasePage {

    async openProductsPage() {

        await this.click(
            'a[href="/products"]'
        );

    }
   async addFirstProductToCart() {

    await this.page.locator(
      '.add-to-cart'
    )
    .first()
    .click();

}
    async searchProduct(
        productName: string
    ) {

        await this.fill(
            '#search_product',
            productName
        );

        await this.click(
            '#submit_search'
        );

    }
}