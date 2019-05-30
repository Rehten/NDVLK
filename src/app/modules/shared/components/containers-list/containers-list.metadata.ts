import {VirtualComplex} from '../../../../types/components/virtual.complex';
import {VirtualContainersListMetadata} from '../../../../types/components/virtual-containers-list.metadata';

export class ContainersListMetadata implements VirtualContainersListMetadata {
  public hasPointer: boolean = true;

  constructor(
    public inner: Array<VirtualComplex> = [],
    public $pointer: string = null,
    public $next: Array<string> = [],
    public $prev: string = null
  ) {}
}
