/// <reference types="cypress" />

describe('Autorizēšanas formas testēšana - neveiksmīga', () => {
  beforeEach(() => { // Cikls, kas atkārtojas pirms katrā testā
      cy.visit('Mājaslpas adrese'); // Ietvars atver mājaslapu
      cy.get('Sign in poga').should('exist').click(); // Ietvars atrod ielogošanas pogu un klikšķina uz to
      cy.url().should('include', '/loginpage url artibūts'); // Ietvars pārbaude saites korektumu
      cy.get('Login lauks').should('exist'); // Ietvars pārbauda lauka "Login" esamību
      cy.get('Paroles lauks').should('exist'); // Ietvars pārbauda lauka "Parole" esamību
      cy.get('Log in poga').should('exist'); // Ietvars pārbauda "Log in" pogas esamību
  })

  it('Login formas aizpildīšana - kļūdains login', () => {
      cy.get('Login lauks').click().type('login'); // Ietvars aizpilda "Login" lauku ar login datiem (kļūdaini)
      cy.get('Paroles lauks').click().type('parole'); // Ietvars aizpilda "Paroles" lauku ar paroles datiem
      cy.get('Log in poga').should('exist').click(); // Ietvars klikšķina "Log in" pogu
      cy.get('Error message').should('exist'); // // Ietvars pārbauda kļūdas ziņojuma esamību
  })

  it('Login formas aizpildīšana - kļūdaina parole', () => {
    cy.get('Login lauks').click().type('login'); // Ietvars aizpilda "Login" lauku ar login datiem
    cy.get('Paroles lauks').click().type('parole'); // Ietvars aizpilda "Paroles" lauku ar paroles datiem (kļūdaini)
    cy.get('Log in poga').should('exist').click(); // Ietvars klikšķina "Log in" pogu
    cy.get('Error message').should('exist'); // // Ietvars pārbauda kļūdas ziņojuma esamību
  })

  it('Login formas aizpildīšana - abi lauki ir aizpildīti ar nevalīdiem datiem', () => {
    cy.get('Login lauks').click().type('login'); // Ietvars aizpilda "Login" lauku ar login datiem (kļūdaini)
    cy.get('Paroles lauks').click().type('parole'); // Ietvars aizpilda "Paroles" lauku ar paroles datiem (kļūdaini)
    cy.get('Log in poga').should('exist').click(); // Ietvars klikšķina "Log in" pogu
    cy.get('Error message').should('exist'); // // Ietvars pārbauda kļūdas ziņojuma esamību
  })

})