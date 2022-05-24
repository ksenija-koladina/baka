/// <reference types="cypress" />

describe('Dropdown izvēlne', () => {
  beforeEach(() => {
    cy.visit('https://liepu.lv/lv'); // ietvars apmeklē mājaslapu
    cy.get('body > header > a').click() // ietvars klikšķina uz burger izvēlnes un atver to (papildus solis)
    cy.get('#menu > div').should('be.visible'); // burger izvēlnes logs ir redzams (papildus solis)
  })

  it('Dropdown izvēlnes saites atvēr vajadzīgo lapu un saturs atbilst saitei', () => {
      cy.get('#menu > div > ul.menu > li:nth-child(1) > a').should('be.visible'); // ietvars pārbauda dropdown izvēlni
      cy.get('#menu > div > ul.menu > li:nth-child(1) > a').click(); //ietvars klikšķina uz dropdown izvēlni 
      cy.get('#menu > div > ul.menu > li:nth-child(1) > ul > li:nth-child(2) > a').should('be.visible'); //izvēlnes saraksta elementi ir redzami
      cy.get('#menu > div > ul.menu > li:nth-child(1) > ul > li:nth-child(2) > a').click(); //ietvars klikšķina uz dropdown izvēlnes saraksta elementu
      cy.url().should('include', '/studiju-programmas'); //saites pārbaude (vai notika navigācija)
      cy.get(':nth-child(1) > .head > .title').should('contain.text', 'Pamatstudijas'); //virsraksta pārbaude
  })


})