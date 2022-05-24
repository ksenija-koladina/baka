/// <reference types="cypress" />

describe('Burger izvēlne - aizvērt', () => {
  beforeEach(() => {
    cy.visit('Mājaslpas adrese'); // Ietvars apmeklē mājaslapu
    cy.get('Burger izvēlne').click() // Ietvars klikšķina uz burger izvēlni un atvēr to
    cy.get('Burger izvēlnes logs').should('be.visible'); // Ietvārs pārbauda, vai burger izvēlnes logs ir redzams
  })

  it('Burger izvēlne aizvērās ar krustiņa klikšķi', () => {
      cy.get('Krustiņš').click(); // Ietvars klikšķina uz burger izvēlnes krustiņu (close poga) un aizvēr to
      cy.get('Burger izvēlnes logs').should('not.be.visible'); // Ietvārs pārbauda, vai burger izvēlnes logs nav redzams
  })


})
