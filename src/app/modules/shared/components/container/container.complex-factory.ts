
import {VirtualComplexFactory} from '../../../../types/components/virtual.complex-factory';
import {ContainerComponent} from './container.component';
import {ContainerMetadata} from './container.metadata';
import {ContainerComplex} from './container.complex';
import {ComponentClass} from '../../../../types/components/static-factory.component';
import {VirtualComponent} from '../../../../types/components/virtual.component';
import {VirtualMetadata} from '../../../../types/components/virtual.metadata';

// короткие названия для типов
type ContainerComponentAlias = ContainerComponent<VirtualComponent<VirtualMetadata>, VirtualMetadata>;
type ContainerMetadataAlias = ContainerMetadata<VirtualComponent<VirtualMetadata>, VirtualMetadata>;

export class ContainerComplexFactory implements VirtualComplexFactory<ContainerComplex, ContainerComponentAlias, ContainerMetadataAlias> {
  create(metaData: ContainerMetadataAlias): ComponentClass<ContainerComponentAlias, ContainerMetadataAlias> {
    return null;
  }
}
