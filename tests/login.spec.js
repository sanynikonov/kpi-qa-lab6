const { test } = require('@playwright/test');
const { CoverageManager } = require('./coverage');
const { LoginPage } = require('./login');

test('login', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const coverage = new CoverageManager(page);

  await coverage.startJsCoverage();
  await coverage.startCssCoverage();
  await loginPage.navigate();
  await loginPage.enterCredentials('freddiemercury', 'freddiemercury');
  await loginPage.checkGreetings('freddiemercury');
  await coverage.stopJsCoverage();
  await coverage.stopCssCoverage();
});
