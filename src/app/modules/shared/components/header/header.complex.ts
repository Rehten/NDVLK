import {VirtualPointerComplex} from '../../../../types/components/virtual-pointer.complex';
import {ComponentClass} from '../../../../types/components/component-class.component';
import {HeaderComponent} from './header.component';
import {HeaderMetadata} from './header.metadata';

export class HeaderComplex implements VirtualPointerComplex {
  constructor(
    public componentClass: ComponentClass<HeaderComponent>,
    public metadata: HeaderMetadata
  ) {}
}
