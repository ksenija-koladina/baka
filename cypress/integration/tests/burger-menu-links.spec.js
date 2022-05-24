/// <reference types="cypress" />

describe('Burger izvēlnes saites', () => {
  beforeEach(() => {
    cy.visit('Mājaslapas adrese'); // ietvars apmeklē mājaslapu
    cy.get('Burger izvēlne').click() // ietvars klikšķina uz burger menu un atvēr to
    cy.get('Burger izvēlnes logs').should('be.visible'); // burger izvēlnes logs ir redzams
  })

  it('Burger izvēlnes saites atvēr vajadzīgo lapu un saturs atbilst saitei', () => {
      cy.get('Burger izvēlnes elements').should('be.visible'); // izvēlnē rādas saraksta elementi
      cy.get('Burger izvēlnes elements').click(); //klikšķis uz elementu 
      cy.url().should('include', '/saites daļa'); //saites pārbaude (vai notika navigācija)
      cy.get('Virsraksts').should('contain.text', 'Virsraksta nosaukums'); //virsraksta pārbaude
  })


})