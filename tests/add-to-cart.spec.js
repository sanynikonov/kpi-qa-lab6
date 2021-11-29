const { test } = require('@playwright/test');
const { AddToCartPage } = require('./add-to-cart');

test('add product to cart', async ({ page }) => {
  const cartPage = new AddToCartPage(page);
  await cartPage.navigate();
  await cartPage.selectProduct();
  await cartPage.addProductToCart();
  await cartPage.navigateToCart();
  await cartPage.checkProductIsInCart();
});