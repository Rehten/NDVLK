import {VirtualComplex} from '../../../../../../types/components/virtual.complex';
import {ComponentClass} from '../../../../../../types/components/component-class.component';
import {TextComponent} from '../../../text/text.component';
import {TextMetadata} from '../../../text/text.metadata';

export class SidebarAccordeonItemComplex implements VirtualComplex {
  constructor(
    public componentClass: ComponentClass<TextComponent>,
    public metadata: TextMetadata = new TextMetadata()
  ) {}
}
