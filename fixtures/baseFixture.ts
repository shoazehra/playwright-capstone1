import { test as base } from '@playwright/test';

import { LoginPage } from '../pages/LoginPage';
import { ProductPage } from '../pages/ProductPage';
import { CartPage } from '../pages/CartPage';
import { HomePage } from '../pages/HomePage';
import { CheckoutPage } from '../pages/CheckoutPage';
import { ContactPage } from '../pages/ContactPage';

type MyFixtures = {

    loginPage: LoginPage;
    productPage: ProductPage;
    cartPage: CartPage;
    homePage: HomePage;
    checkoutPage: CheckoutPage;
    contactPage: ContactPage;

};

export const test = base.extend<MyFixtures>({

    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },

    productPage: async ({ page }, use) => {
        await use(new ProductPage(page));
    },

    cartPage: async ({ page }, use) => {
        await use(new CartPage(page));
    },

    homePage: async ({ page }, use) => {
        await use(new HomePage(page));
    },

    checkoutPage: async ({ page }, use) => {
        await use(new CheckoutPage(page));
    },

    contactPage: async ({ page }, use) => {
        await use(new ContactPage(page));
    }

});

export const expect = test.expect;