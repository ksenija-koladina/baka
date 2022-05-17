/// <reference types="cypress" />

describe('Autorizēšanas formas testēšana - neveiksmīga', () => {
  beforeEach(() => { //cikls, kas atkārtojas pirms katrā testā
      cy.visit('mājaslpas adrese'); // ietvars atver mājaslapu
      cy.get('Sign in poga').should('exist').click(); //ietvars atrod ielogošanas pogu uz klikšķina uz to
      cy.url().should('include', '/loginpage url artibūts'); // ietvars pārbaude linka korektumu
      cy.get('login lauks').should('exist'); // ietvars pārbauda lauka login esamĪbu
      cy.get('paroles lauks').should('exist'); // ietvars pārbauda lauka parole esamĪbu
      cy.get('log in poga').should('exist'); // ietvars pārbauda login pogas esamĪbu
  })

  it('Login formas aizpildīšana - kļūdains login', () => {
      cy.get('login lauks').click().type('login'); //ietvars aizpilda login lauku ar loginu (kļūdaini)
      cy.get('paroles lauks').click().type('parole'); //ietvars aizpilda paroles lauku ar paroli
      cy.get('log in poga').should('exist').click(); //ietvars click "Log in"
      cy.get('error message').should('exist'); // ietvars pārbauda kļūdas ziņojuma esamĪbu
  })

  it('Login formas aizpildīšana - kļūdaina parole', () => {
    cy.get('login lauks').click().type('login'); //ietvars aizpilda login lauku ar loginu
    cy.get('paroles lauks').click().type('parole'); //ietvars aizpilda paroles lauku ar paroli (kļūdaini)
    cy.get('log in poga').should('exist').click(); //ietvars click "Log in"
    cy.get('error message').should('exist'); // ietvars pārbauda kļūdas ziņojuma esamĪbu
  })

  it('Login formas aizpildīšana - abi lauki ir aizpildīti ar nevalīdiem datiem', () => {
    cy.get('login lauks').click().type('login'); //ietvars aizpilda login lauku ar loginu (kļūdaini)
    cy.get('paroles lauks').click().type('parole'); //ietvars aizpilda paroles lauku ar paroli (kļūdaini)
    cy.get('log in poga').should('exist').click(); //ietvars click "Log in"
    cy.get('error message').should('exist'); // ietvars pārbauda kļūdas ziņojuma esamĪbu
  })

})