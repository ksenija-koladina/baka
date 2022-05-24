/// <reference types="cypress" />

describe('Autorizēšanas formas testēšana - veiksmīga', () => {
  beforeEach(() => { //cikls, kas atkārtojas pirms katrā testā
      cy.visit('https://estudijas.liepu.lv/'); // ietvars atver mājaslapu
      // lieks solis šajā sistēma - cy.get('#login > div:nth-child(4) > input').should('exist').click(); //ietvars atrod ielogošanas pogu uz klikšķina uz to
      // lieks solis šajā sistēma - cy.url().should('include', '/loginpage url artibūts'); // ietvars pārbaude linka korektumu
      cy.get('#login_username').should('exist'); // ietvars pārbauda lauka login esamĪbu
      cy.get('#login_password').should('exist'); // ietvars pārbauda lauka parole esamĪbu
      cy.get('#login > :nth-child(4) > .btn').should('exist'); // ietvars pārbauda login pogas esamĪbu
  })

  it('Login formas aizpildīšana', () => {
      cy.get('#login_username').click().type('login'); //ietvars aizpilda login lauku ar loginu
      cy.get('#login_password').click().type('parole'); //ietvars aizpilda paroles lauku ar paroli
      cy.get('#login > :nth-child(4) > .btn').should('exist').click(); ////ietvars click "Log in"
      cy.url().should('include', '/my/'); //lietotāja profila url pārbaude
  })

})