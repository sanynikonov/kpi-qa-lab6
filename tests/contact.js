class ContactPage {
    /**
     * @param {import('playwright').Page} page 
     */
    constructor(page) {
      this.page = page;
    }
    async navigate() {
      await this.page.goto('https://www.demoblaze.com/');
      await this.page.click('a:has-text("Contact")');
    }
    async fillForm(email, recipient, text) {
        await this.page.click('input[type="text"]');
        await this.page.fill('input[type="text"]', email);
        await this.page.press('input[type="text"]', 'Tab');
        await this.page.fill('#recipient-name', recipient);
        await this.page.press('#recipient-name', 'Tab');
        await this.page.fill('textarea', text);
    }
    async checkAlert(){
        this.page.on('dialog', dialog => dialog.accept());
        await this.page.click('text=Send message');
    }

  }
  module.exports = { ContactPage };