import {VirtualComplex} from '../../../../types/components/virtual.complex';
import {ErrorComponent} from './error.component';
import {ErrorMetadata} from './error.metadata';
import {ComponentClass} from '../../../../types/components/component-class.component';

export class ErrorComplex implements VirtualComplex {
  constructor(
    public componentClass: ComponentClass<ErrorComponent>,
    public metadata: ErrorMetadata = new ErrorMetadata()
  ) {}
}
