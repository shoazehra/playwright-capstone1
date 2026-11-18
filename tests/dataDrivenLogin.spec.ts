import { test } from '../fixtures/baseFixture';
import users from '../testdata/users.json';

users.forEach((user) => {

    test(
        `Login Test for ${user.email}`,
        async ({ page, loginPage }) => {

            await loginPage.openLoginPage();

            await page.waitForLoadState(
                'domcontentloaded'
            );

            await page.waitForTimeout(
                3000
            );

            await loginPage.login(
                user.email,
                user.password
            );

        }
    );

});