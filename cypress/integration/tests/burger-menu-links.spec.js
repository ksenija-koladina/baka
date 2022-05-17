/// <reference types="cypress" />

describe('Burger izvēlne - aizvērt', () => {
  beforeEach(() => {
    cy.visit('mājaslapas adrese'); // ietvars apmeklē mājaslapu
    cy.get('burger izvēlne').click() // ietvars klikšķina uz burger menu un atvēr to
  })

  it('Burger menu aizvērās ar krustiņa klikšķi', () => {
      cy.get('krustiņš').click(); // ietvars klikšķina uz burger izvēlnes krustiņu (close poga) un aizvēr to
      cy.get('burger izvēlnes logs').should('not.be.visible'); // burger izvēlnes logs nav redzams
  })


})