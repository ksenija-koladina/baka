/// <reference types="cypress" />

describe('Autorizēšanas formas testēšana - veiksmīga', () => {
  beforeEach(() => { // Cikls, kas atkārtojas pirms katrā testā
      cy.visit('https://estudijas.liepu.lv/'); // Ietvars atver mājaslapu
      // Lieks solis šajā sistēma - cy.get('#login > div:nth-child(4) > input').should('exist').click(); //Ietvars atrod ielogošanas pogu uz klikšķina uz to
      // Lieks solis šajā sistēma - cy.url().should('include', '/loginpage url artibūts'); // Ietvars pārbauda saites korektumu
      cy.get('#login_username').should('exist'); // Ietvars pārbauda lauka "Login" esamību
      cy.get('#login_password').should('exist'); // Ietvars pārbauda lauka "Parole" esamību
      cy.get('#login > :nth-child(4) > .btn').should('exist'); // Ietvars pārbauda login pogas esamību
  })

  it('Login formas aizpildīšana', () => {
      cy.get('#login_username').click().type('login'); // Ietvars aizpilda "Login" lauku ar login datiem
      cy.get('#login_password').click().type('parole'); // Ietvars aizpilda "Paroles" lauku ar paroles datiem
      cy.get('#login > :nth-child(4) > .btn').should('exist').click(); // Ietvars klikšķina "Log in"
      cy.url().should('include', '/my/'); // Lietotāja profila url pārbaude
  })

})