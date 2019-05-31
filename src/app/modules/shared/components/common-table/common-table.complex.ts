import {VirtualPointerComplex} from '../../../../types/components/virtual-pointer.complex';
import {ComponentClass} from '../../../../types/components/component-class.component';
import {ContainersListComponent} from '../containers-list/containers-list.component';
import {ContainersListMetadata} from '../containers-list/containers-list.metadata';
import {CommonTableMetadata} from './common-table.metadata';
import {CommonTableComponent} from './common-table.component';
import {VirtualComplex} from '../../../../types/components/virtual.complex';

export class CommonTableComplex implements VirtualComplex {
  constructor(
    public componentClass: ComponentClass<CommonTableComponent>,
    public metadata: CommonTableMetadata
  ) {}
}
