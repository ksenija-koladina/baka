/// <reference types="cypress" />

describe('Meklēšanas sistēma', () => {
  beforeEach(() => {
    cy.visit('https://estudijas.liepu.lv/'); // Ietvars apmeklē mājaslapu
    cy.get('#login_username').type('login'); // (papildus solis) Ietvars ievada login datus "login" ievades laukā
    cy.get('#login_password').type('parole'); // (papildus solis) Ietvars ievada paroli datus "paroles" ievades laukā
    cy.get('#login > div:nth-child(4) > input').click(); // (papildus solis) Ietvars klikšķina pogu "Pieslēgties"
    cy.get('#label_2_2 > span').click() // (papildus solis) Ietvars naviģējas uz mājaslapas sākumu
  })

  it('Meklēšanas sistēmas pārbaude', () => {
      cy.get('#shortsearchbox').click(); // Ietvars klikšķina uz meklēšanas  ievadlauku
      cy.get('#shortsearchbox').type('Algoritmi'); // Ietvars ievada meklējamo vārdu
      cy.get('#coursesearch > fieldset > button').click(); // Ietvars noklikšķina pogu "Meklēt"
      cy.get('#region-main > div > div.courses.course-search-result.course-search-result-search > div.coursebox.clearfix.odd.first > div.info > h3 > a').should('exist'); // Ietvars pārbauda, vai ir paradījušās meklēšanas rezultāti
      cy.get('#region-main > div > div.courses.course-search-result.course-search-result-search > div.coursebox.clearfix.odd.first > div.info > h3 > a').contains('Algoritmi'); // Ietvars pārbauda, vai meklēšanas rezultātā ir meklējamais vārds
  })

})