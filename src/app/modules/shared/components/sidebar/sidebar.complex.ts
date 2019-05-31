import {VirtualPointerComplex} from '../../../../types/components/virtual-pointer.complex';
import {ComponentClass} from '../../../../types/components/component-class.component';
import {SidebarComponent} from './sidebar.component';
import {SidebarMetadata} from './sidebar.metadata';

export class SidebarComplex implements VirtualPointerComplex {
  constructor(
    public componentClass: ComponentClass<SidebarComponent>,
    public metadata: SidebarMetadata
  ) {}
}
