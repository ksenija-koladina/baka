/// <reference types="cypress" />

describe('Burger izvēlne - aizvērt', () => {
  beforeEach(() => {
    cy.visit('Mājaslapas adrese'); // Ietvars apmeklē mājaslapu
    cy.get('Burger izvēlne').click() // Ietvars klikšķina uz burger izvēlnes un atver to
    cy.get('Burger izvēlnes logs').should('be.visible'); // Burger izvēlnes logs ir redzams
  })

  it('Burger izvēlnē ir saites un tie naviģē uz nepieciešamo lapu', () => {
      cy.get('Izvēlnes saraksts').should('be.visible'); // Izvēlnē rādās saraksta elementi
      cy.get('Saraksta elements').click(); // Klikšķis uz elementu  
      cy.url().should('include', '/saites daļa'); // Saites pārbaude (vai notika navigācija)
      cy.get('Virsraksts').should('contain.text', 'Virsraksta teksts'); // Virsraksta pārbaude
  })


})