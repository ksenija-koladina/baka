/// <reference types="cypress" />

describe('Burger izvēlnes saites', () => {
  beforeEach(() => {
    cy.visit('Mājaslapas adrese'); // Ietvars apmeklē mājaslapu
    cy.get('Burger izvēlne').click() // Ietvars klikšķina uz burger izvēlnes un atver to
    cy.get('Burger izvēlnes logs').should('be.visible'); // Burger izvēlnes logs ir redzams
  })

  it('Burger izvēlnes saites atvēr vajadzīgo lapu un saturs atbilst saitei', () => {
      cy.get('Burger izvēlnes elements').should('be.visible'); // Izvēlnē rādās saraksta elementi
      cy.get('Burger izvēlnes elements').click(); // Klikšķis uz elementu 
      cy.url().should('include', '/saites daļa'); // Saites pārbaude (vai notika navigācija)
      cy.get('Virsraksts').should('contain.text', 'Virsraksta nosaukums'); // Virsraksta pārbaude
  })


})