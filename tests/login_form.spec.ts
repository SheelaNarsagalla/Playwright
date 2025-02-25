import { test, expect } from '@playwright/test';

test('Dublin Schools - Automate Login for Parent Portal', async ({ page }) => {
  // 1️⃣ Open the Dublin Unified School District Home Page
  await page.goto('https://www.dublinusd.org/');
  console.log("Opened Dublin Schools homepage");

  // 2️⃣ Click on the "Parent Portal" button
  await page.getByRole('link', { name: 'Parent Portal' }).click();
  console.log("Clicked Parent Portal button");

  // 3️⃣ Manually navigate to the Parent Portal URL to ensure the correct page loads
  await page.waitForURL; // Wait to ensure navigation starts
  await page.goto('https://icampus.dublinusd.org/campus/portal/dublin.jsp'); // Explicitly go to the parent portal page
  console.log("Navigated to Parent Portal Page");

  // 4️⃣ Click on "Campus Student" or "Campus Parent"
  let loginType = "parent";  // Change to "student" if needed

  if (loginType === "student") {
    await page.getByRole('link', { name: 'Campus Student' }).click();
    console.log("Navigating to Student Login");
  } else if (loginType === "parent") {
    await page.getByRole('link', { name: 'Campus Parent' }).click();
    console.log("Navigating to Parent Login");
  }

  await page.waitForLoadState('networkidle');

  // 5️⃣ Fill in the login form
  await page.getByRole('textbox', { name: 'Username' }).fill('your-username');
  await page.getByRole('textbox', { name: 'Password' }).fill('your-password');
  console.log("Entered login credentials");

  // 6️⃣ Submit the form
  await page.getByRole('button', { name: 'Log In' }).click();
  await page.waitForLoadState('networkidle');

  console.log("Login submitted successfully!");
});


