import { any } from "cypress/types/bluebird";

export abstract class DefiAbstractClass{
    public abstract factoryMethod():CreateInterface;

    public createObj(Obj:any):void {
         const create = this.factoryMethod();
         create.operation(Obj);
     }

}