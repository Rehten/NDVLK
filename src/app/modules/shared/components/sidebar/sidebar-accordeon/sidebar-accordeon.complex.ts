import {VirtualPointerComplex} from '../../../../../types/components/virtual-pointer.complex';
import {ComponentClass} from '../../../../../types/components/component-class.component';
import {SidebarComponent} from '../sidebar.component';
import {SidebarMetadata} from '../sidebar.metadata';
import {SidebarAccordeonMetadata} from './sidebar-accordeon.metadata';
import {SidebarAccordeonComponent} from './sidebar-accordeon.component';

export class SidebarAccordeonComplex implements VirtualPointerComplex {
  constructor(
    public componentClass: ComponentClass<SidebarAccordeonComponent>,
    public metadata: SidebarAccordeonMetadata
  ) {}
}
