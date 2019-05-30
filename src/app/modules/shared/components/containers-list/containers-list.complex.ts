import {VirtualComplex} from '../../../../types/components/virtual.complex';
import {ComponentClass} from '../../../../types/components/component-class.component';
import {ContainersListComponent} from './containers-list.component';
import {ContainersListMetadata} from './containers-list.metadata';
import {VirtualPointerComplex} from '../../../../types/components/virtual-pointer.complex';

export class ContainersListComplex implements VirtualPointerComplex {
  constructor(
    public componentClass: ComponentClass<ContainersListComponent>,
    public metadata: ContainersListMetadata
  ) {}
}
