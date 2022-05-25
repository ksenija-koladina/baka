/// <reference types="cypress" />

describe('Virsrakstu pārbaude', () => {
  beforeEach(() => {
    cy.visit('Mājaslapas adrese'); // Ietvars apmeklē mājaslapu
  })

  it('Virsraksta nosaukums ir pareizs', () => {
      cy.get('Virsraksts').should('exist'); // Ietvars pārbauda, vai mājaslapai ir virsraksts
      cy.get('Virsraksts').should('contain.text', 'Virsraksta nosaukums'); // Ietvars pārbauda, vai virsraksts atbilst gaidāmai vērtībai
  })

})