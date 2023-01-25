import { test, expect } from '@playwright/test';

test('Has heading', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await expect(page).toHaveTitle("Formitor - Your coolest forms.")
});

test('get signup link', async ({ page }) => {
    await page.goto('http://localhost:3000/');
  
    // Click the get started link.
    await page.getByRole('link', { name: 'Sign up - for free!' }).click();
  });
