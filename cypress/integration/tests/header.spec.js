/// <reference types="cypress" />

describe('Virsrakstu pārbaude', () => {
  beforeEach(() => {
    cy.visit('https://estudijas.liepu.lv/'); // ietvars apmeklē mājaslapu
  })

  it('Virsraksta nosaukums ir pareizs', () => {
      cy.get('h1').should('exist'); // ietvars pārbauda, vai mājaslapai ir virsraksts
      cy.get('h1').should('contain.text', 'Liepājas Universitāte'); //ietvars pārbauda, vai virsraksts atbilst gaidāmai vērtībai
  })

})