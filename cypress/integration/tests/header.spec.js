/// <reference types="cypress" />

describe('Virsrakstu pārbaude', () => {
  beforeEach(() => {
    cy.visit('https://estudijas.liepu.lv/'); // Ietvars apmeklē mājaslapu
  })

  it('Virsraksta nosaukums ir pareizs', () => {
      cy.get('h1').should('exist'); // Ietvars pārbauda, vai mājaslapai ir virsraksts
      cy.get('h1').should('contain.text', 'Liepājas Universitāte'); // Ietvars pārbauda, vai virsraksts atbilst gaidāmai vērtībai
  })

})