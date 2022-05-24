/// <reference types="cypress" />

describe('Dropdown izvēlne', () => {
  beforeEach(() => {
    cy.visit('https://estudijas.liepu.lv/'); // Ietvars apmeklē mājaslapu
    cy.get('#login_username').type('login'); // (papildus solis) Ietvars ievada login
    cy.get('#login_password').type('parole'); // (papildus solis) Ietvars ievada paroli
    cy.get('#login > div:nth-child(4) > input').click(); // (papildus solis) Ietvars klikškina pogu "Pieslēgties"
    cy.get("#label_2_4").click() // (papildus solis) Ietvars aizver dropdown izvēlni
  })

  it('Dropdown izvēlnes saites atvēr vajadzīgo lapu un saturs atbilst saitei', () => {
      cy.get('#label_2_4').should('be.visible'); // Ietvars pārbauda dropdown izvēlnes esamību
      cy.get('#label_2_4').click(); // Ietvars klikšķina uz dropdown izvēlni 
      cy.get('#label_3_5 > span').should('be.visible'); // Izvēlnes saraksta elementi ir redzami
      cy.get('#label_3_5 > span').click(); // Ietvars klikšķina uz dropdown izvēlnes saraksta elementu
      cy.url().should('include', '/course/view.php?id=1067'); // Saites pārbaude (vai notika navigācija)
      cy.get('#page-header > div > div > div > div.d-flex.align-items-center > div.mr-auto > div > div > h1').should('contain.text', 'VadZPB04: Cilvēkresursu vadība II/Human Resources Management II'); // Virsraksta pārbaude
  })

})