const { expect } = require('@playwright/test');

class AddToCartPage {
    /**
     * @param {import('playwright').Page} page 
     */
    constructor(page) {
      this.page = page;
    }
    async navigate() {
        await this.page.goto('https://www.demoblaze.com/');
    }
    async selectProduct() {
        await this.page.click('text=Samsung galaxy s6');
        await expect(this.page).toHaveURL('https://www.demoblaze.com/prod.html?idp_=1');
    }
    async addProductToCart(){
        this.page.once('dialog', dialog => {
          console.log(`Dialog message: ${dialog.message()}`);
          dialog.accept();
        });
        await this.page.click('text=Add to cart');
        await expect(this.page).toHaveURL('https://www.demoblaze.com/prod.html?idp_=1#');
    }
    async navigateToCart(){
        await this.page.click('text=Cart');
        await expect(this.page).toHaveURL('https://www.demoblaze.com/cart.html');
    }
    async checkProductIsInCart(){
        await this.page.click('text=Samsung galaxy s6');
    }
  }
  module.exports = { AddToCartPage };