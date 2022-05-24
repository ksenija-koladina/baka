/// <reference types="cypress" />

describe('Autorizēšanas formas testēšana - neveiksmīga', () => {
  beforeEach(() => { //cikls, kas atkārtojas pirms katrā testā
      cy.visit('https://estudijas.liepu.lv/'); // ietvars atver mājaslapu
      // lieks solis šajā sistēma - cy.get('#login > div:nth-child(4) > input').should('exist').click(); //ietvars atrod ielogošanas pogu uz klikšķina uz to
      // lieks solis šajā sistēma - cy.url().should('include', '/loginpage url artibūts'); // ietvars pārbaude linka korektumu
      cy.get('#login_username').should('exist'); // ietvars pārbauda lauka login esamĪbu
      cy.get('#login_password').should('exist'); // ietvars pārbauda lauka parole esamĪbu
      cy.get('#login > :nth-child(4) > .btn').should('exist'); // ietvars pārbauda login pogas esamĪbu
  })

  it('Login formas aizpildīšana - kļūdains login', () => {
      cy.get('#login_username').click().type('login'); //ietvars aizpilda login lauku ar loginu (kļūdaini)
      cy.get('#login_password').click().type('parole'); //ietvars aizpilda paroles lauku ar paroli
      cy.get('#login > :nth-child(4) > .btn').should('exist').click(); //ietvars click "Log in"
      cy.get('#region-main > div > div:nth-child(3) > div > div > div > div > div.loginerrors.mt-3 > div').should('exist'); // ietvars pārbauda kļūdas ziņojuma esamĪbu
  })

  it('Login formas aizpildīšana - kļūdaina parole', () => {
    cy.get('#login_username').click().type('login'); //ietvars aizpilda login lauku ar loginu
    cy.get('#login_password').click().type('parole'); //ietvars aizpilda paroles lauku ar paroli (kļūdaini)
    cy.get('#login > :nth-child(4) > .btn').should('exist').click(); //ietvars click "Log in"
    cy.get('#region-main > div > div:nth-child(3) > div > div > div > div > div.loginerrors.mt-3 > div').should('exist'); // ietvars pārbauda kļūdas ziņojuma esamĪbu
  })

  it('Login formas aizpildīšana - abi lauki ir aizpildīti ar nevalīdiem datiem', () => {
    cy.get('#login_username').click().type('login'); //ietvars aizpilda login lauku ar loginu (kļūdaini)
    cy.get('#login_password').click().type('parole'); //ietvars aizpilda paroles lauku ar paroli (kļūdaini)
    cy.get('#login > :nth-child(4) > .btn').should('exist').click(); //ietvars click "Log in"
    cy.get('#region-main > div > div:nth-child(3) > div > div > div > div > div.loginerrors.mt-3 > div').should('exist'); // ietvars pārbauda kļūdas ziņojuma esamĪbu
  })

})