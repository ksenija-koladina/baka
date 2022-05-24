/// <reference types="cypress" />

describe('Virsraksta pārbaude', () => {
  beforeEach(() => {
    cy.visit('https://liepu.lv/lv'); // Ietvars apmeklē mājaslapu
  })

  it('Virsraksta nosaukums ir pareizs', () => {
      cy.get('body > main > section:nth-child(1) > div.head > h2').should('exist'); // Ietvars pārbauda, vai mājaslapai ir virsraksts
      cy.get('body > main > section:nth-child(1) > div.head > h2').should('contain.text', 'Fakultātes:'); // Ietvars pārbauda, vai virsraksts atbilst gaidāmai vērtībai
  })

})