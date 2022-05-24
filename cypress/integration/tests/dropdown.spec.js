/// <reference types="cypress" />

describe('Dropdown izvēlne', () => {
  beforeEach(() => {
    cy.visit('Mājaslapas adrese'); // ietvars apmeklē mājaslapu
  })

  it('Dropdown izvēlnes saites atvēr vajadzīgo lapu un saturs atbilst saitei', () => {
      cy.get('Dropdown izvēlne').should('be.visible'); // ietvars pārbauda dropdown izvelni
      cy.get('Dropdown izvēlne').click(); //ietvars klikšķina uz dropdown izvēlni 
      cy.get('Dropdown izvēlnes elements').should('be.visible'); //izvelnes saraksta elementi ir redzami
      cy.get('Dropdown izvēlne elements').click(); //ietvars klikšķina uz dropdown izvelnes saraksta elementu
      cy.url().should('include', '/saites daļa'); //saites pārbaude (vai notika navigācija)
      cy.get('Virsraksts').should('contain.text', 'Virsraksta nosaukums'); //virsraksta pārbaude
  })

})