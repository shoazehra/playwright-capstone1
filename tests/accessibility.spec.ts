import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test(
  'Accessibility Check',
  async ({ page }) => {

    await page.goto(
      'https://automationexercise.com'
    );

    const accessibilityScanResults =
      await new AxeBuilder({ page })
        .analyze();

    console.log(
      'Violations:',
      accessibilityScanResults.violations.length
    );

    expect(
      accessibilityScanResults.violations
    ).toBeDefined();

  }
);