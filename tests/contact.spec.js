const { test } = require('@playwright/test');
const { ContactPage } = require('./contact');

test('send contact', async ({ page }) => {

  const contactPage = new ContactPage(page);
  await contactPage.navigate();
  await contactPage.fillForm('freddiemercure@queen.uk', 'freddie mercury', 'oh darling look at my cat delilah');
  await contactPage.checkAlert();
});