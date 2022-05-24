/// <reference types="cypress" />

describe('Burger izvēlne - aizvērt', () => {
  beforeEach(() => {
    cy.visit('https://liepu.lv/lv'); // Ietvars apmeklē mājaslapu
    cy.get('body > header > a').click() // Ietvars klikšķina uz burger izvēlni un atver to
    cy.get('#menu > div').should('be.visible'); // Ietvars pārbauda, vai burger izvēlnes logs ir redzams
  })

  it('Burger izvēlne aizvērās ar krustiņa klikšķi', () => {
      cy.get('#menu > div > div.text-right.text-md-left > a').click(); // Ietvars klikšķina uz burger izvēlnes krustiņu (close poga) un aizver to
      cy.get('#menu > div').should('not.be.visible'); // Ietvars pārbauda, vai burger izvēlnes logs nav redzams
  })


})
