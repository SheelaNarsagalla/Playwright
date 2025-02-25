import { test, expect } from '@playwright/test';

test('Dublin Schools - Automate Login for Parent Portal', async ({ page }) => {
  await page.goto('https://www.dublinusd.org/');
  await page.getByRole('link', { name: 'Parent Portal' }).click();
  await page.waitForURL;
  await page.goto('https://icampus.dublinusd.org/campus/portal/dublin.jsp');

  let loginType = "parent";

  if (loginType === "student") {
    await page.getByRole('link', { name: 'Campus Student' }).click();
  } else if (loginType === "parent") {
    await page.getByRole('link', { name: 'Campus Parent' }).click();
  }

  await page.waitForLoadState('networkidle');
  await page.getByRole('textbox', { name: 'Username' }).fill('your-username');
  await page.getByRole('textbox', { name: 'Password' }).fill('your-password');
  await page.getByRole('button', { name: 'Log In' }).click();
  await page.waitForLoadState('networkidle');
  await page.getByRole
});
