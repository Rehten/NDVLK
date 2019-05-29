import {VirtualComplexFactory} from '../../../../types/components/virtual.complex-factory';
import {ContainerComponent} from './container.component';
import {ContainerMetadata} from './container.metadata';
import {ContainerComplex} from './container.complex';
import {VirtualComponent} from '../../../../types/components/virtual.component';
import {VirtualMetadata} from '../../../../types/components/virtual.metadata';
import {ComponentClass} from '../../../../types/components/component-class.component';
import {VirtualComplex} from '../../../../types/components/virtual.complex';

export class ContainerComplexFactory implements VirtualComplexFactory {
  create(metaData: ContainerMetadata): ContainerComplex {
    return new ContainerComplex(ContainerComponent, metaData);
  }
}
