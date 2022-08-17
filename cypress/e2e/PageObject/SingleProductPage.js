class SingleProductPage {
  getProductInformation() {
    return cy.get(".product-information");
  }
  getProductName() {
    return cy.get(".product-information h2");
  }
  getProductCategory() {
    return cy.get(".product-information p").contains("Category: ");
  }
  getProductPrice() {
    return cy.get(".product-information span>span");
  }
  getProductAvailability() {
    return cy.get(".product-information p").contains("Availability:");
  }
  getProductCondition() {
    return cy.get(".product-information p").contains("Condition:");
  }
  getProductBrand() {
    return cy.get(".product-information p").contains("Brand:");
  }
  getProductQuantity() {
    return cy.get("#quantity");
  }
  getAddToCartBtn() {
    return cy.get(".cart");
  }
  getModalViewCartBtn() {
    return cy.get(`.modal-content a[href="/view_cart"]`);
  }
}

export default new SingleProductPage();
