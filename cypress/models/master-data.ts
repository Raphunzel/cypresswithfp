import { configurationType } from "../enums/configuration-type";
import { operationType } from "../enums/operation-type";
import { DefiAbstractClass } from "../support/DefiAbstractClass";

export class masterData{
    public configurationType : string;
    public operationType : string;
    public groupName : string;
    public fieldName : string;
    public fieldCreator: DefiAbstractClass;
    public obj:any;

    set fieldCreatorFn(fieldCreator:DefiAbstractClass){
        this.fieldCreator=fieldCreator;
    }

    get fieldCreatorFn():DefiAbstractClass{
        return this.fieldCreator;
    }

    set dataObject(obj:any){
        this.obj=obj;
    }

    get dataObject():any{
        return this.obj;
    }
}