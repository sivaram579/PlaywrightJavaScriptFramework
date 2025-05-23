const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/LoginPage');

test('User should be able to log in', async ({ page }) => {
    const loginPage = new LoginPage(page);
    
    await loginPage.navigate();
    await loginPage.login();
    await loginPage.verifyLoginSuccess();
    await loginPage.logout();
});