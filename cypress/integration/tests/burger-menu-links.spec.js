/// <reference types="cypress" />

describe('Burger izvēlne - aizvērt', () => {
  beforeEach(() => {
    cy.visit('mājaslapas adrese'); // ietvars apmeklē mājaslapu
    cy.get('burger izvēlne').click() // ietvars klikšķina uz burger menu un atvēr to
    cy.get('burger izvēlnes logs').should('be.visible'); // burger izvēlnes logs ir redzams
  })

  it('Burger izvēlnē ir saites un tie naviģē uz nepieciešamo lapu', () => {
      cy.get('izvēlnes saraksts').should('be.visible'); // izvēlnē rādas saraksta elementi
      cy.get('saraksta elements').click(); //klikšķis uz elementu 
      cy.url().should('include', '/linka daļa'); //saites pārbaude (vai notika navigācija)
      cy.get('virsraksts').should('contain.text', 'Virsraksta teksts'); //virsraksta pārbaude
  })


})