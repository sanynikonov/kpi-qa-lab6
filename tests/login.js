const { expect } = require('@playwright/test');

class LoginPage {
    /**
     * @param {import('playwright').Page} page 
     */
    constructor(page) {
      this.page = page;
    }
    async navigate() {
      await this.page.goto('https://www.demoblaze.com/');
    }
    async enterCredentials(username, password) {
        await this.page.click('a:has-text("Log in")');
        await this.page.click('text=Log in × Username: Password: Close Log in >> input[type="text"]');
        await this.page.fill('text=Log in × Username: Password: Close Log in >> input[type="text"]', username);
        await this.page.click('text=Log in × Username: Password: Close Log in >> input[type="password"]');
        await this.page.fill('text=Log in × Username: Password: Close Log in >> input[type="password"]', password);
        await Promise.all([
            this.page.waitForNavigation(/*{ url: 'https://www.demoblaze.com/' }*/),
            this.page.click('button:has-text("Log in")')
        ]);
    }
    async checkGreetings(username){
        await this.page.click('text=Welcome ' + username);
        await expect(this.page).toHaveURL('https://www.demoblaze.com/#');
    }

  }
  module.exports = { LoginPage };