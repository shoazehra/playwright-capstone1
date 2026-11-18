import { test, expect } from '../fixtures/baseFixture';

test(
    'Open Login Page',
    async ({ page, loginPage }) => {

        await loginPage.openLoginPage();

        await expect(page).toHaveURL(
            /login/
        );

    }
);