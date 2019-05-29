import {VirtualComplex} from '../../../../types/components/virtual.complex';
import {ComponentClass} from '../../../../types/components/component-class.component';
import {ErrorComponent} from '../error/error.component';
import {ErrorMetadata} from '../error/error.metadata';
import {FormInputComponent} from './form-input.component';
import {FormInputMetadata} from './form-input.metadata';

export class FormInputComplex implements VirtualComplex {
  constructor(
    public componentClass: ComponentClass<FormInputComponent>,
    public metadata: FormInputMetadata = new FormInputMetadata()
  ) {}
}
