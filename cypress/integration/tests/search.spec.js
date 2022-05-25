/// <reference types="cypress" />

describe('Meklēšanas sistēma', () => {
  beforeEach(() => {
    cy.visit('Mājaslapas adrese'); // Ietvars apmeklē mājaslapu
  })

  it('Meklēšanas sistēmas pārbaude', () => {
      cy.get('Meklēšanas ievades laukums').click(); // Ietvars klikšķina uz meklēšanas  joslu
      cy.get('Meklēšanas ievades laukums').type('Meklējamais vārds vai teikums'); // Ietvars ievada meklējamo vārdu
      cy.get('Meklēšanas poga').click(); // Ietvars noklikšķina pogu "Meklēt"
      cy.get('Meklēšanas rezultāts').should('exist'); // Ietvars pārbauda, vai ir paradījušās meklēšanas rezultāti
      cy.get('Meklēšanas rezultāts').contains('Meklējamais vārds vai teikums'); // Ietvars pārbauda, vai meklēšanas rezultātā ir meklējamais vārds
  })

})
