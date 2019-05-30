import {VirtualComplex} from '../../../../types/components/virtual.complex';
import {VirtualContainersListMetadata} from '../../../../types/components/virtual-containers-list.metadata';
import {ContainerComponent} from '../container/container.component';
import {ContainerComplex} from '../container/container.complex';

export class ContainersListMetadata implements VirtualContainersListMetadata {
  public hasPointer: boolean = true;

  constructor(
    public inner: Array<ContainerComplex> = [],
    public $pointer: string = null,
    public $next: Array<string> = [],
    public $prev: string = null
  ) {}
}
