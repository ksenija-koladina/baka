/// <reference types="cypress" />

describe('Dropdown izvēlne', () => {
  beforeEach(() => {
    cy.visit('https://liepu.lv/lv'); // ietvars apmeklē mājaslapu
    cy.get('body > header > a').click() // (papildus solis) Ietvars klikšķina uz burger izvēlnes un atver to
    cy.get('#menu > div').should('be.visible'); // (papildus solis) Burger izvēlnes logs ir redzams
  })

  it('Dropdown izvēlnes saites atvēr vajadzīgo lapu un saturs atbilst saitei', () => {
      cy.get('#menu > div > ul.menu > li:nth-child(1) > a').should('be.visible'); // Ietvars pārbauda dropdown izvēlnes esamību
      cy.get('#menu > div > ul.menu > li:nth-child(1) > a').click(); // Ietvars klikšķina uz dropdown izvēlni 
      cy.get('#menu > div > ul.menu > li:nth-child(1) > ul > li:nth-child(2) > a').should('be.visible'); // Izvēlnes saraksta elementi ir redzami
      cy.get('#menu > div > ul.menu > li:nth-child(1) > ul > li:nth-child(2) > a').click(); // Ietvars klikšķina uz dropdown izvēlnes saraksta elementu
      cy.url().should('include', '/studiju-programmas'); // Saites pārbaude (vai notika navigācija)
      cy.get(':nth-child(1) > .head > .title').should('contain.text', 'Pamatstudijas'); // Virsraksta pārbaude
  })


})