import {VirtualComplex} from '../../../../../types/components/virtual.complex';
import {ComponentClass} from '../../../../../types/components/component-class.component';
import {HeaderInputMetadata} from './header-input.metadata';
import {HeaderInputComponent} from './header-input.component';

export class HeaderInputComplex implements VirtualComplex {
  constructor(
    public componentClass: ComponentClass<HeaderInputComponent>,
    public metadata: HeaderInputMetadata
  ) {}
}
