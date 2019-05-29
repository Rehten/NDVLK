import {VirtualComplexFactory} from '../../../../types/components/virtual.complex-factory';
import {ErrorComponent} from './error.component';
import {ErrorMetadata} from './error.metadata';
import {ErrorComplex} from './error.complex';

export class ErrorComplexFactory implements VirtualComplexFactory {
  create(metaData: ErrorMetadata): ErrorComplex {
    return new ErrorComplex();
  }
}
