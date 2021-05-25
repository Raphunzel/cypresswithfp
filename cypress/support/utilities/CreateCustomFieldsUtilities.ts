import {CustomFieldsPage} from "../pageObjects/CustomFieldsPage";

export class CreateCustomFieldsUtilities implements CreateInterface{
  customFieldsPage=new CustomFieldsPage();
  duplicateCheck:boolean;

  //function to perform creation operation
  operation(obj) {
    cy.visit("https://gmftraining.qa.defisolutions.com/Home/Landing/")
  cy.url().then((url) => {
    if (url.includes("/Home/Landing")) {
      cy.get(this.customFieldsPage.configItmLnk).last().click();
    }
  })  

     cy.url().should('contain', 'Home/ConfigurationNormal').then(($url) => {
      cy.addTestContext('PASSED','Configuration page displayed');
    })

    cy.get(this.customFieldsPage.createCstmFldLnk).click();
    cy.url().should('contain', 'Admin/DataElement').then(($url) => {
      cy.addTestContext('PASSED','Create custom fields page displayed');
   })

   cy.get(this.customFieldsPage.rsltsTbl,{ timeout: 10000 }).should('be.visible').then(elem => {
    cy.addTestContext('PASSED','All elements loaded');
    });

   cy.get(this.customFieldsPage.grpDrpDwn).select(obj.Group);
   cy.get(this.customFieldsPage.searchTxt).clear();
   cy.get(this.customFieldsPage.searchTxt).type(obj.Name);
   cy.get(this.customFieldsPage.searchTxt).should('have.value', obj.Name);
   
   this.duplicateCheck=false;
    cy.get(this.customFieldsPage.rsltsTbl).find('td').each(($ele) => {
      
      if ($ele.text().includes(obj.Name))
        {
          this.duplicateCheck=true;
          cy.addTestContext('PASSED','Element already exists');
          return false;
        }
    }).then(() => { 
      if (!this.duplicateCheck)
      {
        cy.get(this.customFieldsPage.newBtn).click();
        this.populateStaticElements(obj);
      } 
    }) 
  }

  //Function to populate static Elements
  populateStaticElements(obj){
    cy.get(this.customFieldsPage.newDlgBx,{ timeout: 10000 }).should('be.visible').then(elem => {
      cy.addTestContext('PASSED','Data Element dialog box is displayed');
    });
    
    cy.get(this.customFieldsPage.nameTxt).type(obj.Name);
  
    cy.get(this.customFieldsPage.nameTxt).type(obj.Name).then(() => {
      if (obj.Active == "TRUE") {
        cy.addTestContext('PASSED', 'Active Check Box is checked');
      }
    });

    if (obj.Mandatory == "TRUE") {
      cy.get(this.customFieldsPage.mandatoryChkBx).click().then(elem => {
        cy.addTestContext('PASSED', 'Mandatory Check Box is checked');
      });
    }

    if (obj.Sensitive  == "TRUE") {
      cy.get(this.customFieldsPage.sensitiveChkBx).click().then(elem => {
        cy.addTestContext('PASSED', 'Sensitive Check Box is checked');
      });
    }

    if (obj.CoApplicantOnly == "TRUE") {
      cy.get(this.customFieldsPage.coApplicantChkBx).click().then(elem => {
        cy.addTestContext('PASSED', 'Co-applicant Check Box is checked');
      });
    }

    cy.get(this.customFieldsPage.orderTxt).clear().type(obj.Order).then(elem => {
      cy.addTestContext('PASSED', 'Order value is entered');
    })
    
  }
}