import {VirtualMetadata} from '../../../../../types/components/virtual.metadata';
import {ContainerComplex} from '../../container/container.complex';

export class SidebarAccordeonMetadata implements VirtualMetadata {
  public hasPointer: boolean = true;

  constructor(
    public inner: Array<ContainerComplex> = [],
    public text: string = 'Аккордеон',
    public $pointer: string = null,
    public $next: Array<string> = [],
    public $prev: string = null
  ) {}
}
