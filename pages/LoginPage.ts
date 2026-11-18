import { BasePage } from './BasePage';

export class LoginPage extends BasePage {

    async openLoginPage() {
        await this.navigate('/login');
    }

    async login(
    email: string,
    password: string
) {

    await this.page.waitForSelector(
        '[data-qa="login-email"]',
        { timeout: 30000 }
    );

    await this.fill(
        '[data-qa="login-email"]',
        email
    );

    await this.page.waitForSelector(
        '[data-qa="login-password"]',
        { timeout: 30000 }
    );

    await this.fill(
        '[data-qa="login-password"]',
        password
    );

    await this.click(
        '[data-qa="login-button"]'
    );
}
}