import { BasePage } from './BasePage';

export class CheckoutPage extends BasePage {

    async proceedToCheckout() {

        await this.click(
            'text=Proceed To Checkout'
        );

    }
}