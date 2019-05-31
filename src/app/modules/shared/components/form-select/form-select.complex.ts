import {VirtualComplex} from '../../../../types/components/virtual.complex';
import {ComponentClass} from '../../../../types/components/component-class.component';
import {FormInputComponent} from '../form-input/form-input.component';
import {FormInputMetadata} from '../form-input/form-input.metadata';
import {FormSelectComponent} from './form-select.component';
import {FormSelectMetadata} from './form-select.metadata';

export class FormSelectComplex implements VirtualComplex {
  constructor(
    public componentClass: ComponentClass<FormSelectComponent>,
    public metadata: FormSelectMetadata = new FormSelectMetadata()
  ) {}
}
