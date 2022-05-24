/// <reference types="cypress" />

describe('Autorizēšanas formas testēšana - neveiksmīga', () => {
  beforeEach(() => { // Cikls, kas atkārtojas pirms katrā testā
      cy.visit('https://estudijas.liepu.lv/'); // ietvars atver mājaslapu
      // Lieks solis šajā sistēmā - cy.get('#login > div:nth-child(4) > input').should('exist').click(); // Ietvars atrod ielogošanas pogu un klikšķina uz to
      // Lieks solis šajā sistēmā - cy.url().should('include', '/loginpage url artibūts'); // Ietvars pārbaude linka korektumu
      cy.get('#login_username').should('exist'); // Ietvars pārbauda lauka "Login" esamību
      cy.get('#login_password').should('exist'); // Ietvars pārbauda lauka "Parole" esamību
      cy.get('#login > :nth-child(4) > .btn').should('exist'); // Ietvars pārbauda "Log in" pogas esamību
  })

  it('Login formas aizpildīšana - kļūdains login', () => {
      cy.get('#login_username').click().type('login'); // Ietvars aizpilda "Login" lauku ar login datiem (kļūdaini)
      cy.get('#login_password').click().type('parole'); // Ietvars aizpilda "Paroles" lauku ar paroles datiem
      cy.get('#login > :nth-child(4) > .btn').should('exist').click(); // Ietvars klikšķina "Log in"
      cy.get('#region-main > div > div:nth-child(3) > div > div > div > div > div.loginerrors.mt-3 > div').should('exist'); // Ietvars pārbauda kļūdas ziņojuma esamību
  })

  it('Login formas aizpildīšana - kļūdaina parole', () => {
    cy.get('#login_username').click().type('login'); // Ietvars aizpilda login lauku ar login datiem
    cy.get('#login_password').click().type('parole'); // Ietvars aizpilda paroles lauku ar paroles datiem (kļūdaini)
    cy.get('#login > :nth-child(4) > .btn').should('exist').click(); // Ietvars klikšķina "Log in"
    cy.get('#region-main > div > div:nth-child(3) > div > div > div > div > div.loginerrors.mt-3 > div').should('exist'); // Ietvars pārbauda kļūdas ziņojuma esamību
  })

  it('Login formas aizpildīšana - abi lauki ir aizpildīti ar nevalīdiem datiem', () => {
    cy.get('#login_username').click().type('login'); // Ietvars aizpilda login lauku ar login datiem(kļūdaini)
    cy.get('#login_password').click().type('parole'); // Ietvars aizpilda paroles lauku ar paroles datiem(kļūdaini)
    cy.get('#login > :nth-child(4) > .btn').should('exist').click(); // Ietvars klikšķina "Log in"
    cy.get('#region-main > div > div:nth-child(3) > div > div > div > div > div.loginerrors.mt-3 > div').should('exist'); // Ietvars pārbauda kļūdas ziņojuma esamību
  })

})