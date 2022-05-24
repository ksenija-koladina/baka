/// <reference types="cypress" />

describe('Meklēšanas sistēma', () => {
  beforeEach(() => {
    cy.visit('https://liepu.lv/lv'); // ietvars apmeklē mājaslapu
    cy.get('body > header > nav > a:nth-child(9)').click() // ietvars klikšķina uz meklēšanas pogu, lai atvēru meklēšanas lapu
  })

  it('Meklēšanas sistēmas pārbaude', () => {
      cy.get('#searchField > input').click(); // ietvars klikšķina uz meklešanas ievadlauku
      cy.get('#searchField > input').type('Studenti'); //ietvars ievada meklējamo vardu
      cy.get('#searchField > span > button').click(); //ietvars noklikšķina pogu "meklēt"
      cy.get('body > main > section:nth-child(2) > div:nth-child(2) > div:nth-child(3) > a').should('exist'); // ietvars pārbauda, vai ir paradijušas testa rezultāti
      cy.get('body > main > section:nth-child(2) > div:nth-child(2) > div:nth-child(3) > a').contains('Studenti'); // ietvars pārbauda, vai meklēšanas rezultātā ir meklējamais vards
  })

})
