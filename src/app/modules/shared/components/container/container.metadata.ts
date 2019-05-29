import {VirtualMetadata} from '../../../../types/components/virtual.metadata';
import {JSONField} from '../../../../types/json-field.type';
import {VirtualComplex} from '../../../../types/components/virtual.complex';
import {VirtualComponent} from '../../../../types/components/virtual.component';
import {VirtualContainerMetadata} from '../../../../types/components/virtual-container.metadata';

export class ContainerMetadata<T extends VirtualComponent<R>, R extends VirtualMetadata> implements VirtualContainerMetadata {
  constructor(public inner: VirtualComplex<T, R> = null) {}
}
