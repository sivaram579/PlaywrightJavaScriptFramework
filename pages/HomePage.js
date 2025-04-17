const { expect } = require('@playwright/test');

class HomePage {
    constructor(page){
        this.page = page;
        this.openMenu = page.locator('#react-burger-menu-btn');
        this.logoutLink = page.locator('#logout_sidebar_link');
        this.sauceLabsBackpack = page.locator("//div[contains(text(),'Sauce Labs Backpack')]");
        this.inventoryItemName = page.locator('[data-test="inventory-item-name"]');
        this.addToKartButton = page.locator('[data-test="add-to-cart"]');
        this.shoppingKartButton = page.locator('[data-test="shopping-cart-link"]');
        this.checkoutButton = page.locator('[data-test="checkout"]');
        this.firstName = page.locator('[data-test="firstName"]');
        this.lastName = page.locator('[data-test="lastName"]');
        this.postalCode = page.locator('[data-test="postalCode"]');
        this.continueButton = page.locator('[data-test="continue"]');
        this.finishButton = page.locator('[data-test="finish"]');
        this.headerMessage = page.locator('[data-test="complete-header"]');
    }

    async validateBackpackItem()
    {
        //await this.sauceLabsBackpack.toContainText('Sauce Labs Backpack');
        await this.sauceLabsBackpack.click();
    }

    async addItemToCart()
    {
        await expect(this.inventoryItemName).toContainText('Sauce Labs Backpack');
        await this.addToKartButton.click();

    }

    async openKartAndCheckout()
    {
        await this.shoppingKartButton.click();
        //await expect(sauceLabsBackpack).toBeVisible();
        await this.checkoutButton.click();
        await this.firstName.fill('Siva');
        await this.lastName.fill('Ram');
        await this.postalCode.fill('500049');
        await this.continueButton.click();
        await this.finishButton.click();
        await expect(this.headerMessage).toContainText('Thank you for your order!');
    }

    async logout() {
        await this.openMenu.click();
        await this.logoutLink.click();
        await this.page.close();
    }
}

module.exports = HomePage;