/// <reference types="cypress" />

describe('Burger izvēlne - aizvērt', () => {
  beforeEach(() => {
    cy.visit('https://liepu.lv/lv'); // ietvars apmeklē mājaslapu
    cy.get('body > header > a').click() // ietvars klikšķina uz burger menu un atvēr to
    cy.get('#menu > div').should('be.visible');
  })

  it('Burger menu aizvērās ar krustiņa klikšķi', () => {
      cy.get('#menu > div > div.text-right.text-md-left > a').click(); // ietvars klikšķina uz burger izvēlnes krustiņu (close poga) un aizvēr to
      cy.get('#menu > div').should('not.be.visible'); // burger izvēlnes logs nav redzams
  })


})
