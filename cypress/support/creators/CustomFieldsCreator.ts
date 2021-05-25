import { CreateCustomFieldsUtilities } from '../utilities/CreateCustomFieldsUtilities';
import {DefiAbstractClass} from '../DefiAbstractClass';

export class CustomFieldsCreator extends DefiAbstractClass{
    public factoryMethod(): CreateInterface {
        return new CreateCustomFieldsUtilities();
    }
}