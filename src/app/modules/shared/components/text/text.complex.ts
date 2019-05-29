import {VirtualComplex} from '../../../../types/components/virtual.complex';
import {ComponentClass} from '../../../../types/components/component-class.component';
import {ErrorMetadata} from '../error/error.metadata';
import {TextComponent} from './text.component';

export class TextComplex implements VirtualComplex {
  constructor(
    public componentClass: ComponentClass<TextComponent>,
    public metadata: ErrorMetadata = new ErrorMetadata()
  ) {}
}
