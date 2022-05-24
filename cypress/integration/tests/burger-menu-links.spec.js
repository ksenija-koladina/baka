/// <reference types="cypress" />

describe('Burger izvēlnes saites', () => {
  beforeEach(() => {
    cy.visit(''); // ietvars apmeklē mājaslapu
    cy.get('').click() // ietvars klikšķina uz burger menu un atvēr to
    cy.get('').should('be.visible'); // burger izvēlnes logs ir redzams
  })

  it('Burger izvēlnes saites atvēr vajadzīgo lapu un saturs atbilst saitei', () => {
      cy.get('').should('be.visible'); // izvēlnē rādas saraksta elementi
      cy.get('').click(); //klikšķis uz elementu 
      cy.url().should('include', '/'); //saites pārbaude (vai notika navigācija)
      cy.get('').should('contain.text', 'Projekti'); //virsraksta pārbaude
  })


})