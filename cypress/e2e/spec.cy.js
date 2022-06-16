// import cypress from "cypress"
// import { baseUrl } from '../../cypress.config';

// import { defineConfig } from '../../cypress.config';

// describe('empty spec', () => {
//   it('passes', () => {
//     cy.visit('https://example.cypress.io')
//   })
// })

describe('Test our homepage', () => {
  // it('visiting homepage works', () => {
  //   cy.visit("/")
  // })
  // it('products are present', () => {
  //   cy.visit("/");
  //   cy.get('ul').children().contains('Acer')
  // })
  // it('non-existent products are not present', () => {
  //   cy.visit("/");
  //   cy.get('ul').children().contains('Pikachu').should('not.exist')
  // })
  it('can navigate from homepage to product page', () => {
    cy.visit("/");
    cy.get('ul > li > a').contains('Acer').click();
    cy.url().should('include', 'products/1');
    cy.get('div').contains('soiling and wear');
  })
  it('can navigate from homepage to product page', () => {
    cy.visit("/products/1");
    cy.contains('Acer');
    cy.get('a').contains('Back to home').click();
    cy.url().should('eq', '/')
    cy.get('div').contains('soiling and wear');
  })
  it('can navigate from homepage to basket', () => {
    cy.visit("/");
    cy.get('#__next > div > header > div > div.flex.flex-row.mt-2 > div > a').contains('Cart').click();
    cy.url().should('include', 'basket');
  })
})

