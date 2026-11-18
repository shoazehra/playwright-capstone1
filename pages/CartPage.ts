import { Page } from '@playwright/test';

export class CartPage {

    constructor(private page: Page) {}

    async openCart() {
        await this.page.click('a[href="/view_cart"]');
    }

    async removeProduct() {
        await this.page.locator('.cart_quantity_delete').click();
    }
}