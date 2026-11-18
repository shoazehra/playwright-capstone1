import { BasePage } from './BasePage';

export class ContactPage extends BasePage {

    async submitContactForm(
        name: string,
        email: string,
        subject: string,
        message: string
    ) {

        await this.fill('[data-qa="name"]', name);
        await this.fill('[data-qa="email"]', email);
        await this.fill('[data-qa="subject"]', subject);
        await this.fill('#message', message);

    }
}