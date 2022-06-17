beforeEach(() => {
  cy.clearLocalStorage();
})

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
    cy.contains('a', 'Acer').click();
    cy.pause();
    cy.url().should('include', 'products/1');
    cy.get('div').contains('soiling and wear');
  })
  it('can navigate from homepage to basket', () => {
    cy.visit("/");
    cy.contains('a', 'Basket').click();
    cy.pause();
    cy.url().should('include', 'basket');
  })
})

describe('Product tests', () => {
  it('can navigate from product page to homepage', () => {
    cy.visit("/products/1");
    cy.contains('Acer');
    cy.contains('a', 'Back To Home').click();
    cy.pause();
    cy.url().should('not.include', 'products');
    cy.url().should('not.include', 'basket');
  })

  it('can add item to basket from product page', () => {
    cy.visit("/products/1");
    cy.get('button')
      .click()
      .should(() => {
        expect(localStorage.getItem('basket')).to.include('Acer');
        expect(localStorage.getItem('basket')).not.to.include('Logitech');
      })
    cy.visit("/basket");
    cy.contains('h2', 'Acer');
    //this is not a great test in its current form, since it only resets reliably if the basket is empty at the beginning
    cy.contains('button', 'Delete').click();
    cy.clearLocalStorage();
  })
})

