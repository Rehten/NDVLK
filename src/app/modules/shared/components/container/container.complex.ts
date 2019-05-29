import {VirtualComplex} from '../../../../types/components/virtual.complex';
import {ContainerComponent} from './container.component';
import {ContainerMetadata} from './container.metadata';
import {ComponentClass} from '../../../../types/components/component-class.component';

export class ContainerComplex implements VirtualComplex {
  constructor(
    public componentClass: ComponentClass<ContainerComponent>,
    public metadata: ContainerMetadata
  ) {}
}
