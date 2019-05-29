import {VirtualMetadata} from '../../../../types/components/virtual.metadata';
import {JSONField} from '../../../../types/json-field.type';
import {VirtualComplex} from '../../../../types/components/virtual.complex';
import {VirtualComponent} from '../../../../types/components/virtual.component';
import {VirtualContainerMetadata} from '../../../../types/components/virtual-container.metadata';
import {ErrorComplex} from '../error/error.complex';
import {ErrorComponent} from '../error/error.component';

export class ContainerMetadata implements VirtualContainerMetadata {
  constructor(public inner: VirtualComplex = new ErrorComplex()) {}
}
