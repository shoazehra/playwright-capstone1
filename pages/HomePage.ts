import { BasePage } from './BasePage';

export class HomePage extends BasePage {

    async openHomePage() {
        await this.navigate('/');
    }

    async clickProducts() {
        await this.click('a[href="/products"]');
    }

    async clickCart() {
        await this.click('a[href="/view_cart"]');
    }

    async clickContactUs() {
        await this.click('a[href="/contact_us"]');
    }
}