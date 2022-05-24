/// <reference types="cypress" />

describe('Meklēšanas sistēma', () => {
  beforeEach(() => {
    cy.visit('https://liepu.lv/lv'); // ietvars apmeklē mājaslapu
  })

  it('Virsraksta nosaukums ir pareizs', () => {
      cy.get('body > main > section:nth-child(1) > div.head > h2').should('exist'); // ietvars pārbauda, vai mājaslapai ir virsraksts
      cy.get('body > main > section:nth-child(1) > div.head > h2').should('contain.text', 'Fakultātes:'); //ietvars pārbauda, vai virsraksts atbilst gaidāmai vērtībai
  })

})