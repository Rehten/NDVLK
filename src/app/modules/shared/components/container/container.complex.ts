import {VirtualComplex} from '../../../../types/components/virtual.complex';
import {ContainerComponent} from './container.component';
import {ContainerMetadata} from './container.metadata';
import {VirtualComponent} from '../../../../types/components/virtual.component';
import {VirtualMetadata} from '../../../../types/components/virtual.metadata';
import {ComponentClass} from '../../../../types/components/static-factory.component';

// короткие названия для типов
type ContainerComponentAlias = ContainerComponent<VirtualComponent<VirtualMetadata>, VirtualMetadata>;
type ContainerMetadataAlias = ContainerMetadata<VirtualComponent<VirtualMetadata>, VirtualMetadata>;

export class ContainerComplex implements VirtualComplex<ContainerComponentAlias, ContainerMetadataAlias> {
  constructor(
    public componentClass: ComponentClass<ContainerComponentAlias, ContainerMetadataAlias>,
    public metadata: ContainerMetadataAlias
  ) {}
}
