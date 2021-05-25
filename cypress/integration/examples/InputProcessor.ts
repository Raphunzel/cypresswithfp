import { configurationType } from '../../enums/configuration-type';
import { CustomFields } from '../../models/custom-fields';
import { CustomFieldsCreator } from '../../support/creators/CustomFieldsCreator';
import jsonObject from './../../fixtures/MasterFile.json';
import {masterData} from './../../models/master-data';
import {masterDataList} from './../../models/master-data-list';


export function dataProcessor():masterDataList{
    let masterDataListObject=new masterDataList();
    masterDataListObject.mdata=<masterData[]>jsonObject;
    for (let masterDataIterator of masterDataListObject.mdata){
        // var fieldData=getObj(masterDataIterator);
        assert.equal(masterDataIterator.configurationType, "CustomFields", 'vals equal')
        // assert.equal(masterData.fieldName, "VehicleMiles", 'vals equal')
        
        switch(masterDataIterator.configurationType) { 
            case configurationType.CUSTOMFIELDS: { 
                // masterDataIterator.dataObject=<CustomFields>fieldData;
                masterDataIterator.fieldCreatorFn=new CustomFieldsCreator();
                break; 
            } 
            case configurationType.FORMULAS: { 
                //statements; 
                break; 
            }
            case configurationType.PAGEFORMULAS: { 
                //statements; 
                break; 
                } 
            default: { 
                //statements; 
                break; 
            } 
            } 
        
    }
    assert.equal(masterDataListObject.mdata.length,2 , 'list items are equal')
    return masterDataListObject;
}

//  function getObj(masterDataObject:masterData):(any){
    
//     // if (masterDataObject.configurationType==configurationType.CUSTOMFIELDS){
//     //     configurationTypeFolder="custom-fields";
//     // }else if (masterDataObject.configurationType==configurationType.FORMULAS){
//     //     configurationTypeFolder="formulas";
//     // }else if (masterDataObject.configurationType==configurationType.PAGEFORMULAS){
//     //     configurationTypeFolder="page-formulas";
//     // }
//     let configurationTypeFolder:string="custom-fields";
//     assert.equal(configurationTypeFolder,"custom-fields"  , 'list items are equal') ;
//     assert.equal(masterDataObject.groupName,"Applicant"  , 'list items are equal') ;
//     // assert.equal(masterDataObject.fieldName,"VehicleMiles"  , 'list items are equal') ;   
     
//     //var jsonData = require(`../../fixtures/custom-fields/Applicant/VehicleMiles.json`);

//     //let jsonData3:string="../../fixtures/VehicleMiles.json";

//     // let configurationTypeFolderName:string="custom-fields";
//     // var jsonData = require(`../../fixtures/${configurationTypeFolderName}/Applicant/VehicleMiles.json`);

    
//     //var jsonData = require(`../../fixtures/${configurationTypeFolder}/${masterDataObject.groupName}/${masterDataObject.fieldName}.json`);
    
//     //var jsonData = require(jsonData3);

//     //var jsonData2 = require(`../../fixtures/${configurationTypeFolder}//Applicant/VehicleMiles.json`);
//     //  import('../../fixtures/custom-fields/Applicant/VehicleMiles.json').then(({default: jsonData}) => jsonData);
//     // var path = '../../fixtures/custom-fields/Applicant/VehicleMiles.json';
//     // var jsonData =  import('../../fixtures/custom-fields/Applicant/VehicleMiles.json').then(function(jsonData) {
//     //     return jsonData;
//     //   }); 
//       return jsonData;   
// }