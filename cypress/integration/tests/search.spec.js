/// <reference types="cypress" />

describe('Meklēšanas sistēma', () => {
  beforeEach(() => {
    cy.visit('https://estudijas.liepu.lv/'); // ietvars apmeklē mājaslapu
    cy.get('#login_username').type('login'); // (papildus solis) ietvars ievada login
    cy.get('#login_password').type('parole'); // (papildus solis) ietvars ievada paroli
    cy.get('#login > div:nth-child(4) > input').click(); // (papildus solis) ietvars klikškina pogu "Pieslēgties"
    cy.get('#label_2_2 > span').click() // (papildus solis) ietvars naviģejas uz mājaslapas sākumu
  })

  it('Meklēšanas sistēmas pārbaude', () => {
      cy.get('#shortsearchbox').click(); // ietvars klikšķina uz meklešanas ievadlauku
      cy.get('#shortsearchbox').type('Algoritmi'); //ietvars ievada meklējamo vardu
      cy.get('#coursesearch > fieldset > button').click(); //ietvars noklikšķina pogu "meklēt"
      cy.get('#region-main > div > div.courses.course-search-result.course-search-result-search > div.coursebox.clearfix.odd.first > div.info > h3 > a').should('exist'); // ietvars pārbauda, vai ir paradijušas testa rezultāti
      cy.get('#region-main > div > div.courses.course-search-result.course-search-result-search > div.coursebox.clearfix.odd.first > div.info > h3 > a').contains('Algoritmi'); // ietvars pārbauda, vai meklēšanas rezultātā ir meklējamais vards
  })

})