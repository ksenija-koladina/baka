/// <reference types="cypress" />

describe('Dropdown izvēlne', () => {
  beforeEach(() => {
    cy.visit('Mājaslapas adrese'); // Ietvars apmeklē mājaslapu
  })

  it('Dropdown izvēlnes saites atvēr vajadzīgo lapu un saturs atbilst saitei', () => {
      cy.get('Dropdown izvēlne').should('be.visible'); // Ietvars pārbauda dropdown izvēlnes esamību
      cy.get('Dropdown izvēlne').click(); // Ietvars klikšķina uz dropdown izvēlni 
      cy.get('Dropdown izvēlnes elements').should('be.visible'); // Izvēlnes saraksta elementi ir redzami
      cy.get('Dropdown izvēlne elements').click(); // Ietvars klikšķina uz dropdown izvēlnes saraksta elementu
      cy.url().should('include', '/saites daļa'); // Saites pārbaude (vai notika navigācija)
      cy.get('Virsraksts').should('contain.text', 'Virsraksta nosaukums'); // Virsraksta pārbaude
  })

})