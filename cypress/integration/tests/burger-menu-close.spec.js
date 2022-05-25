/// <reference types="cypress" />

describe('Burger izvēlne - aizvērt', () => {
  beforeEach(() => {
    cy.visit('Mājaslapas adrese'); // Ietvars apmeklē mājaslapu
    cy.get('Burger izvēlne').click() // // Ietvars klikšķina uz burger izvēlni un atver to
    cy.get('Burger izvēlnes logs').should('be.visible'); // Ietvars pārbauda, vai burger izvēlnes logs ir redzams
  })

  it('Burger menu aizvērās ar krustiņa klikšķi', () => {
      cy.get('Krustiņš - poga Aizvērt').click(); // Ietvars klikšķina uz burger izvēlnes krustiņu (close poga) un aizver to
      cy.get('Burger izvēlnes logs').should('not.be.visible'); // Ietvars pārbauda, vai burger izvēlnes logs nav redzams
  })


})
