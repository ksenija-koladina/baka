/// <reference types="cypress" />

describe('Autorizēšanas formas testēšana - veiksmīga', () => {
  beforeEach(() => { // Cikls, kas atkārtojas pirms katrā testā
      cy.visit('mājaslapas adrese'); // Ietvars atver mājaslapu
      cy.get('Sign in poga').should('exist').click(); // Ietvars atrod ielogošanas pogu uz klikšķina uz to
      cy.url().should('include', '/loginpage url artibūts'); // Ietvars pārbaude saites korektumu
      cy.get('login lauks').should('exist'); // Ietvars pārbauda lauka "Login" esamību
      cy.get('paroles lauks').should('exist'); // Ietvars pārbauda lauka "Parole" esamĪbu
      cy.get('log in poga').should('exist'); // Ietvars pārbauda login pogas esamību
  })

  it('Login formas aizpildīšana', () => {
      cy.get('login lauks').click().type('login'); // Ietvars aizpilda login lauku ar login datiem
      cy.get('paroles lauks').click().type('parole'); // Ietvars aizpilda paroles lauku ar paroles datiem
      cy.get('log in poga').should('exist').click(); // Ietvars klikšķima "Log in"
      cy.url().should('include', '/lietotāja profils'); // Lietotāja profila url pārbaude
  })

})