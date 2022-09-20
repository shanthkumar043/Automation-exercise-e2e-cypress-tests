class HomePage {
  getNavbarLinks() {
    return cy.get(`ul.navbar-nav`);
  }
  getLogoutLink() {
    return cy.get('a[href="/logout"]');
  }
  getLoginLink() {
    return cy.get('.navbar-nav a[href="/login"]');
  }

  getContactLink() {
    return cy.get('a[href="/contact_us"]');
  }

  getCartLink() {
    return cy.get('li a[href="/view_cart"]');
  }

  getTestCasesLink() {
    return cy.get('li a[href="/test_cases"]');
  }

  getProductsLink() {
    return cy.get('a[href="/products"]');
  }

  getSubscribeEmailInput() {
    return cy.get("#susbscribe_email");
  }
  getSubscribeBtn() {
    return cy.get("#subscribe");
  }
  getSubscribeStatusMsg() {
    return cy.get("#success-subscribe");
  }
  getFooter() {
    return cy.get("#footer");
  }
  getRecommendedItems() {
    return cy.get(".recommended_items");
  }
  getFirstRecommendedItem() {
    return cy.get(".recommended_items .single-products").first();
  }
  getFirstRecommendedItemCartBtn() {
    return cy.get(".recommended_items .add-to-cart").first();
  }
  getRecommendedItemsTitle() {
    return cy.get(".recommended_items .title");
  }
  getModalViewCartBtn() {
    return cy.get(`.modal-content a[href="/view_cart"]`);
  }
  getCategories() {
    return cy.get(`#accordian a[data-parent="#accordian"]`);
  }
  getWomenCategory() {
    return cy.get(`#accordian a[href="#Women"]`);
  }
  getDressSubcategory() {
    return cy.get(`#Women a[href="/category_products/1"]`);
  }
  getMenCategory() {
    return cy.get(`#accordian a[href="#Men"]`);
  }
  getTshirtsSubcategory() {
    return cy.get(`#Men a[href="/category_products/3"]`);
  }
}

export default new HomePage();
