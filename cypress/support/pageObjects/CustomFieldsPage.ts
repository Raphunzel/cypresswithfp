export class CustomFieldsPage {
    public configItmLnk:string;
    public createCstmFldLnk:string;
    public grpDrpDwn:string;
    public searchTxt:string;
    public rsltsTbl:string;
    public newBtn:string;
    public newDlgBx:string;
    public closeBtn:string;
    public bkBtn:string;
    public nameTxt: string;
    public activeChkBx: string;
    public mandatoryChkBx: string;
    public sensitiveChkBx: string;
    public coApplicantChkBx: string;
    public orderTxt: string;

    constructor(){
        this.configItmLnk='a[href="/Home/ConfigurationNormal"]';
        this.createCstmFldLnk='a[href="/Admin/DataElement"]';
        this.grpDrpDwn='select[id="groupId"]';
        this.searchTxt='input[id="txtSearch"]';
        this.rsltsTbl='table#grid.ui-jqgrid-btable';
        this.newBtn='#btnNew';
        this.newDlgBx='div[id="editDiv"]';
        this.closeBtn='input[id="btnClose"]';
        this.bkBtn='a[id="back"]';
        this.nameTxt = '#name';
        this.activeChkBx = '#isActive';
        this.mandatoryChkBx = '#isRequired';
        this.sensitiveChkBx = '#isSensitive';
        this.coApplicantChkBx = '#isCoApplicantField';
        this.orderTxt='#sortOrder';
    }

}