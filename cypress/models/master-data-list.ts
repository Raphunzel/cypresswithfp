import {masterData} from './master-data';

export class masterDataList{
    public masterDataList : masterData[];

    set mdata(dataList:masterData[]){
        this.masterDataList=dataList;
    }

    get mdata():(masterData[]){
        return this.masterDataList;
    }
}