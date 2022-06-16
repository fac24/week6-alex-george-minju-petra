describe('Test our homepage', () => {
  it('visiting homepage works', () => {
    cy.visit("/")
  })
  it('products are present', () => {
    cy.visit("/");
    cy.get('ul').children().contains('Acer')
  })
  it('non-existent products are not present', () => {
    cy.visit("/");
    cy.get('ul').children().contains('Pikachu').should('not.exist')
  })
  it('can navigate from homepage to product page', () => {
    cy.visit("/");
    cy.get('ul > li > a').contains('Acer').click();
    cy.url().should('include', 'products/1');
    cy.get('div').contains('soiling and wear');
  })
  it('can navigate from homepage to basket', () => {
    cy.visit("/");
    cy.get('#__next > div > header > div > div.flex.flex-row.mt-2 > div > a').contains('Cart').click();
    cy.url().should('include', 'basket');
  })
})

describe('Product tests', () => {
  it('can navigate from product page to homepage', () => {
    cy.visit("/products/1");
    cy.contains('Acer');
    cy.get('#__next > div > main > a').contains('Back to home').click();
    cy.url().should('eq', '/')
    cy.get('div').contains('soiling and wear');
  })

  it('can add item to basket from product page', () => {
    cy.clearLocalStorage();
    cy.visit("/products/1");
    cy.get('#__next > div > main > section.container.m-auto.mt-5.p-10.pb-2 > div.m-auto.mt-5 > form > button')
      .click()
      .should(() => {
        expect(localStorage.getItem('basket')).to.eq('{"colours":"Sorta sage","variants":"5g","quantity":"1","pid":"4"},,{"colours":"silver","variants":"large screen","quantity":"1","pid":{"id":1,"name":"Acer Aspire C24","category_id":3,"stock":7,"price":"699.00","description":"Computer with good memory and various screen sizes. Some soiling and wear.","photo_url":"https://static2-ecemea.acer.com/media/catalog/product/cache/4d1e466ee0151a7142143e21e5d254f9/_/a/_acer-aspire_c24-1651_main_kbmouse_dq.bg8ek.003.png","variants":"{\"variants\": [\"large screen\", \"medium screen\", \"small screen\"], \"variantType\": \"Screen Size\"}","colours":"{\"colours\": [\"silver\", \"space grey\", \"burgundy\"]}","brand_id":1,"category":"desktop","brand":"microsoft"},"totalPrice":"699.00"}')
      })
    cy.clearLocalStorage();
  })

})

