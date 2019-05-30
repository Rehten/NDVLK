import {VirtualComplex} from '../../../../../types/components/virtual.complex';
import {ComponentClass} from '../../../../../types/components/component-class.component';
import {HeaderButtonComponent} from './header-button.component';
import {HeaderButtonMetadata} from './header-button.metadata';

export class HeaderButtonComplex implements VirtualComplex {
  constructor(
    public componentClass: ComponentClass<HeaderButtonComponent>,
    public metadata: HeaderButtonMetadata
  ) {}
}
