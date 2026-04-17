class ProductsPage {
  constructor(page) {
    this.page = page;
    this.inventoryList = page.locator('.inventory_list');
    this.cartIcon = page.locator('.shopping_cart_link');
  }

  async addProductToCart(productName) {
    const productAddButton = this.page.locator(`//div[text()="${productName}"]/../../..//button`);
    await productAddButton.click();
  }

  async goToCart() {
    await this.cartIcon.click();
  }
}
module.exports = { ProductsPage };
