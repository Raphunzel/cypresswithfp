/// <reference types="Cypress" />

const masterObject = require("../../fixtures/MasterFile.json");

import {LoginPageUtilities } from '../../support/utilities/LoginPageUtilities';
import {DefiAbstractClass} from '../../support/DefiAbstractClass';
import { dataProcessor } from './InputProcessor';
import { masterDataList } from '../../models/master-data-list';


describe('Defi Automation', () => {
  before(()=>{
    var loginObj=new LoginPageUtilities();
    loginObj.loginpage();
  })

  beforeEach(() => {
    cy.preserveAllCookiesOnce();
  });
  
  it(`file exists`, () => {
    cy.readFile('./cypress/fixtures/MasterFile.json').should("exist")
  });
  
  
  let masterDataListObject=dataProcessor();
  for (let masterData of masterDataListObject.mdata){
    debugger
    //below json file object will be replaced by typescript object
    // var configurationTypeFolderName="customfields";
    // var jsonData = require(`../../fixtures/${configurationTypeFolderName}/Applicant/VehicleMiles.json`);
    // console.log("jsonData",jsonData);
    var path=`./fixtures/customfields/Applicant/VehicleMiles.json`;
    var jsonData = require(path);
    it(`${masterData.operationType} ${masterData.fieldName} for ${masterData.configurationType} in Group - ${masterData.groupName}`, () => {   
      // mapperFn(masterData.fieldCreatorFn,masterData.dataObject);
      mapperFn(masterData.fieldCreatorFn,jsonData);
    });
   
    function mapperFn(creator: DefiAbstractClass,Obj:any) {
      creator.createObj(Obj);
    }
  }
});