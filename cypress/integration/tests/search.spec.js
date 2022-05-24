/// <reference types="cypress" />

describe('Meklēšanas sistēma', () => {
  beforeEach(() => {
    cy.visit('https://liepu.lv/lv'); // Ietvars apmeklē mājaslapu
    cy.get('body > header > nav > a:nth-child(9)').click() // Ietvars klikšķina uz meklēšanas pogu, lai atvērtu meklēšanas lapu
  })

  it('Meklēšanas sistēmas pārbaude', () => {
      cy.get('#searchField > input').click(); // Ietvars klikšķina uz meklēšanas  ievadlauku
      cy.get('#searchField > input').type('Studenti'); // Ietvars ievada meklējamo vārdu
      cy.get('#searchField > span > button').click(); // Ietvars noklikšķina pogu "Meklēt"
      cy.get('body > main > section:nth-child(2) > div:nth-child(2) > div:nth-child(3) > a').should('exist'); // Ietvars pārbauda, vai ir paradījušās meklēšanas rezultāti
      cy.get('body > main > section:nth-child(2) > div:nth-child(2) > div:nth-child(3) > a').contains('Studenti'); // Ietvars pārbauda, vai meklēšanas rezultātā ir meklējamais vārds
  })

})
