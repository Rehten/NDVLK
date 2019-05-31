import {VirtualMetadata} from '../../../../../../types/components/virtual.metadata';

export class SidebarAccordeonItemMetadata implements VirtualMetadata {
  constructor(
    public text: string = 'Обычный текст',
    public href: string = ''
  ) {}
}
