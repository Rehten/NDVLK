import {VirtualComplex} from '../../../../types/components/virtual.complex';
import {ComponentClass} from '../../../../types/components/component-class.component';
import {ContainersListComponent} from './containers-list.component';
import {ContainersListMetadata} from './containers-list.metadata';

export class ContainersListComplex {
  constructor(
    public componentClass: ComponentClass<ContainersListComponent>,
    public metadata: ContainersListMetadata
  ) {}
}
