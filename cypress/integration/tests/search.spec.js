/// <reference types="cypress" />

describe('Meklēšanas sistēma', () => {
  beforeEach(() => {
    cy.visit('Mājaslapas adrese'); // ietvars apmeklē mājaslapu
  })

  it('Meklēšanas sistēmas pārbaude', () => {
      cy.get('Meklēšanas ievades laukums').click(); // ietvars klikšķina uz meklešanas ievadlauku
      cy.get('Meklēšanas ievades laukums').type('Meklējamais vārds vai teikums'); //ietvars ievada meklējamo vardu
      cy.get('Meklēšanas poga').click(); //ietvars noklikšķina pogu "meklēt"
      cy.get('Meklēšanas rezultāts').should('exist'); // ietvars pārbauda, vai ir paradijušas testa rezultāti
      cy.get('Meklēšanas rezultāts').contains('Meklējamais vārds vai teikums'); // ietvars pārbauda, vai meklēšanas rezultātā ir meklējamais vards
  })

})
