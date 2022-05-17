/// <reference types="cypress" />

describe('Autorizēšanas formas testēšana - veiksmīga', () => {
  beforeEach(() => { //cikls, kas atkārtojas pirms katrā testā
      cy.visit('mājaslapas adrese'); // ietvars atver mājaslapu
      cy.get('Sign in poga').should('exist').click(); //ietvars atrod ielogošanas pogu uz klikšķina uz to
      cy.url().should('include', '/loginpage url artibūts'); // ietvars pārbaude linka korektumu
      cy.get('login lauks').should('exist'); // ietvars pārbauda lauka login esamĪbu
      cy.get('paroles lauks').should('exist'); // ietvars pārbauda lauka parole esamĪbu
      cy.get('log in poga').should('exist'); // ietvars pārbauda login pogas esamĪbu
  })

  it('Login formas aizpildīšana', () => {
      cy.get('login lauks').click().type('login'); //ietvars aizpilda login lauku ar loginu
      cy.get('paroles lauks').click().type('parole'); //ietvars aizpilda paroles lauku ar paroli
      cy.get('log in poga').should('exist').click(); ////ietvars click "Log in"
      cy.url().should('include', '/lietotāja profils'); //lietotāja profila url pārbaude
  })

})