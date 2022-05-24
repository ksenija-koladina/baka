/// <reference types="cypress" />

describe('Burger izvēlnes saites', () => {
  beforeEach(() => {
    cy.visit('https://liepu.lv/lv'); // Ietvars apmeklē mājaslapu
    cy.get('body > header > a').click() // Ietvars klikšķina uz burger izvēlnes un atver to
    cy.get('#menu > div').should('be.visible'); // Burger izvēlnes logs ir redzams
  })

  it('Burger izvēlnes saites atvēr vajadzīgo lapu un saturs atbilst saitei', () => {
      cy.get('#menu > div > ul.shortcuts').should('be.visible'); // Izvēlnē rādās saraksta elementi
      cy.get('#menu > div > ul.shortcuts > li:nth-child(1) > a').click(); // Klikšķis uz elementu 
      cy.url().should('include', '/projekti'); // Saites pārbaude (vai notika navigācija)
      cy.get(':nth-child(1) > .head > .title').should('contain.text', 'Projekti'); // Virsraksta pārbaude
  })


})