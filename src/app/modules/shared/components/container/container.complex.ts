import {VirtualComplex} from '../../../../types/components/virtual.complex';
import {ContainerComponent} from './container.component';
import {ContainerMetadata} from './container.metadata';
import {ComponentClass} from '../../../../types/components/component-class.component';
import {VirtualPointerComplex} from '../../../../types/components/virtual-pointer.complex';

export class ContainerComplex implements VirtualPointerComplex {
  constructor(
    public componentClass: ComponentClass<ContainerComponent>,
    public metadata: ContainerMetadata
  ) {}
}
