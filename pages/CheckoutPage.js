class CheckoutPage {
  constructor(page) {
    this.page = page;
    this.checkoutButton = page.locator('[data-test="checkout"]');
    this.firstName = page.locator('[data-test="firstName"]');
    this.lastName = page.locator('[data-test="lastName"]');
    this.postalCode = page.locator('[data-test="postalCode"]');
    this.continueButton = page.locator('[data-test="continue"]');
    this.finishButton = page.locator('[data-test="finish"]');
    this.completeHeader = page.locator('.complete-header');
  }

  async completeInformation(name, last, cp) {
    await this.checkoutButton.click();
    await this.firstName.fill(name);
    await this.lastName.fill(last);
    await this.postalCode.fill(cp);
    await this.continueButton.click();
    await this.finishButton.click();
  }
}
module.exports = { CheckoutPage };
