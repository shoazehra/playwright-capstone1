import { defineConfig, devices } from '@playwright/test';

export default defineConfig({

  testDir: './tests',

  fullyParallel: true,

  retries: 1,

  reporter: [
    ['html'],
    ['list']
  ],

  use: {

    baseURL: 'https://automationexercise.com',

    screenshot: 'only-on-failure',

    trace: 'on-first-retry',

    video: 'retain-on-failure',

    headless: true
  },

  projects: [

    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome']
      },
    },

    {
      name: 'firefox',
      use: {
        ...devices['Desktop Firefox']
      },
    },

    {
      name: 'webkit',
      use: {
        ...devices['Desktop Safari']
      },
    }

  ]

});