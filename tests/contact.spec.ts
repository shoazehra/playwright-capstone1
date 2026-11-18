import { test }
from '../fixtures/baseFixture';

test(
'Contact Form',

async ({
 page,
 contactPage
}) => {

 await page.goto(
   'https://automationexercise.com/contact_us'
 );

 await contactPage.submitContactForm(
     'Shoa',
     'test@gmail.com',
     'Playwright',
     'Capstone Testing'
 );

});