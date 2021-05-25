import {LoginPage} from  "../pageObjects/LoginPage"

export class LoginPageUtilities{
loginPage = new LoginPage();

loginpage(){
    cy.visit(Cypress.env('url'))     
    cy.get(this.loginPage.userNameTxt).type(Cypress.env('userName'));
    cy.get(this.loginPage.passwordTxt).type(Cypress.env('password'));
    cy.get(this.loginPage.loginBtn).click();
  
   // assertions
   cy.url().should('contain', '/Home/Landing').then(($url) => {
      cy.addTestContext('PASSED','Login successful');
    })
  }
}