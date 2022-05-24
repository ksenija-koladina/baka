/// <reference types="cypress" />

describe('Autorizēšanas formas testēšana - neveiksmīga', () => {
  beforeEach(() => { // Cikls, kas atkārtojas pirms katrā testā
      cy.visit('mājaslpas adrese'); // Ietvars atver mājaslapu
      cy.get('Sign in poga').should('exist').click(); // Ietvars atrod ielogošanas pogu uz klikšķina uz to
      cy.url().should('include', '/loginpage url artibūts'); // Ietvars pārbauda saites korektumu
      cy.get('login lauks').should('exist'); // Ietvars pārbauda lauka "Login" esamību
      cy.get('paroles lauks').should('exist'); // Ietvars pārbauda lauka "Parole" esamību
      cy.get('log in poga').should('exist'); // Ietvars pārbauda "Log in" pogas esamību
  })

  it('Login formas aizpildīšana - kļūdains login', () => {
      cy.get('login lauks').click().type('login'); // Ietvars aizpilda "Login" lauku ar login datiem (kļūdaini)
      cy.get('paroles lauks').click().type('parole'); // Ietvars aizpilda "Paroles" lauku ar paroles datiem
      cy.get('log in poga').should('exist').click(); // Ietvars klikšķina "Log in"
      cy.get('error message').should('exist'); // Ietvars pārbauda kļūdas ziņojuma esamību
  })

  it('Login formas aizpildīšana - kļūdaina parole', () => {
    cy.get('login lauks').click().type('login'); // Ietvars aizpilda "Login" lauku ar login datiem
    cy.get('paroles lauks').click().type('parole'); // Ietvars aizpilda "Paroles" lauku ar paroles datiem (kļūdaini)
    cy.get('log in poga').should('exist').click(); // Ietvars klikšķina "Log in"
    cy.get('error message').should('exist'); // Ietvars pārbauda kļūdas ziņojuma esamību
  })

  it('Login formas aizpildīšana - abi lauki ir aizpildīti ar nevalīdiem datiem', () => {
    cy.get('login lauks').click().type('login'); // Ietvars aizpilda "Login" lauku ar login datiem (kļūdaini)
    cy.get('paroles lauks').click().type('parole'); // Ietvars aizpilda "Paroles" lauku ar paroles datiem (kļūdaini)
    cy.get('log in poga').should('exist').click(); // Ietvars klikšķina "Log in"
    cy.get('error message').should('exist'); // Ietvars pārbauda kļūdas ziņojuma esamību
  })

})