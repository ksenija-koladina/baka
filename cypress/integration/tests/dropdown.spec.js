/// <reference types="cypress" />

describe('Dropdown izvēlne', () => {
  beforeEach(() => {
    cy.visit('https://estudijas.liepu.lv/'); // ietvars apmeklē mājaslapu
    cy.get('#login_username').type('login'); // (papildus solis) ietvars ievada login
    cy.get('#login_password').type('parole'); // (papildus solis) ietvars ievada paroli
    cy.get('#login > div:nth-child(4) > input').click(); // (papildus solis) ietvars klikškina pogu "Pieslēgties"
    cy.get("#label_2_4").click() // (papildus) solis ietvars aizvēr dropdown izvēlni
  })

  it('Dropdown izvēlnes saites atvēr vajadzīgo lapu un saturs atbilst saitei', () => {
      cy.get('#label_2_4').should('be.visible'); // ietvars pārbauda dropdown izvelni
      cy.get('#label_2_4').click(); //ietvars klikšķina uz dropdown izvēlni 
      cy.get('#label_3_5 > span').should('be.visible'); //izvelnes saraksta elementi ir redzami
      cy.get('#label_3_5 > span').click(); //ietvars klikšķina uz dropdown izvelnes saraksta elementu
      cy.url().should('include', '/course/view.php?id=1067'); //saites pārbaude (vai notika navigācija)
      cy.get('#page-header > div > div > div > div.d-flex.align-items-center > div.mr-auto > div > div > h1').should('contain.text', 'VadZPB04: Cilvēkresursu vadība II/Human Resources Management II'); //virsraksta pārbaude
  })

})