Playwright Enterprise Automation Framework
Project Overview
This project implements a Playwright TypeScript automation framework for AutomationExercise.

Features implemented:

Page Object Model (POM)
Custom Fixtures
Data Driven Testing
Accessibility Testing
Visual Regression Testing
Network Mocking
Cross Browser Execution
HTML Reporting
Trace Viewer
Framework Structure
pages/ fixtures/ tests/ testdata/ reports/ screenshots/

Page Object Model
Implemented Page Objects:

BasePage
LoginPage
HomePage
ProductPage
CartPage
CheckoutPage
ContactPage
Fixtures
Implemented custom fixtures in:

fixtures/baseFixture.ts

Fixtures provide reusable page object instances across tests.

Test Scenarios
Login
Logout
Search Product
Add Product To Cart
Remove Product From Cart
Checkout Flow
Order Placement Validation
Contact Form Validation
Data Driven Testing
Implemented using:

testdata/users.json

Used in:

dataDrivenLogin.spec.ts

Accessibility Testing
Implemented using:

@axe-core/playwright

File:

accessibility.spec.ts

Visual Regression Testing
Implemented using:

toHaveScreenshot()

File:

visual.spec.ts

Network Mocking
Implemented using:

page.route()

File:

mocking.spec.ts

Cross Browser Execution
Supported Browsers:

Chromium
Firefox
WebKit
Execution: