import {VirtualComplex} from '../../../../types/components/virtual.complex';
import {VirtualContainerMetadata} from '../../../../types/components/virtual-container.metadata';
import {ErrorComplex} from '../error/error.complex';
import {ErrorComponent} from '../error/error.component';

export class ContainerMetadata implements VirtualContainerMetadata {
  constructor(public inner: VirtualComplex = new ErrorComplex(ErrorComponent)) {}
}
