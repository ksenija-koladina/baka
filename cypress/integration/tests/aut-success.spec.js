/// <reference types="cypress" />

describe('Autorizēšanas formas testēšana - veiksmīga', () => {
  beforeEach(() => { // Cikls, kas atkārtojas pirms katrā testā
      cy.visit('Mājaslapas adrese'); // Ietvars atver mājaslapu
      cy.get('Sign in poga').should('exist').click(); // Ietvars atrod ielogošanas pogu uz klikšķina uz to
      cy.url().should('include', '/loginpage url artibūts'); // Ietvars pārbauda saites korektumu
      cy.get('Login lauks').should('exist'); // Ietvars pārbauda lauka "Login" esamību
      cy.get('Paroles lauks').should('exist'); // Ietvars pārbauda lauka "Parole" esamību
      cy.get('Log in poga').should('exist'); // Ietvars pārbauda "Log in" pogas esamību
  })

  it('Login formas aizpildīšana', () => {
      cy.get('Login lauks').click().type('login'); // Ietvars aizpilda "Login" lauku ar login datiem
      cy.get('Paroles lauks').click().type('parole'); // Ietvars aizpilda "Paroles" lauku ar paroles datiem
      cy.get('Log in poga').should('exist').click(); // Ietvars klikšķina "Log in" pogu
      cy.url().should('include', '/lietotāja profila url atribūts'); // Lietotāja profila url pārbaude
  })

})