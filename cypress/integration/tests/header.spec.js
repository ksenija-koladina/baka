/// <reference types="cypress" />

describe('Virsrakstu pārbaude', () => {
  beforeEach(() => {
    cy.visit('Mājaslapas adrese'); // ietvars apmeklē mājaslapu
  })

  it('Virsraksta nosaukums ir pareizs', () => {
      cy.get('Virsraksts').should('exist'); // ietvars pārbauda, vai mājaslapai ir virsraksts
      cy.get('Virsraksts').should('contain.text', 'Fakultātes:'); //ietvars pārbauda, vai virsraksts atbilst gaidāmai vērtībai
  })

})