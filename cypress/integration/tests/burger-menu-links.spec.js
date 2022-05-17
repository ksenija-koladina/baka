/// <reference types="cypress" />

describe('Burger izvēlnes saites', () => {
  beforeEach(() => {
    cy.visit('https://liepu.lv/lv'); // ietvars apmeklē mājaslapu
    cy.get('body > header > a').click() // ietvars klikšķina uz burger menu un atvēr to
    cy.get('#menu > div').should('be.visible'); // burger izvēlnes logs ir redzams
  })

  it('Burger izvēlnes saites atvēr vajadzīgo lapu un saturs atbilst saitei', () => {
      cy.get('#menu > div > ul.shortcuts').should('be.visible'); // izvēlnē rādas saraksta elementi
      cy.get('#menu > div > ul.shortcuts > li:nth-child(1) > a').click(); //klikšķis uz elementu 
      cy.url().should('include', '/projekti'); //saites pārbaude (vai notika navigācija)
      cy.get(':nth-child(1) > .head > .title').should('contain.text', 'Projekti'); //virsraksta pārbaude
  })


})