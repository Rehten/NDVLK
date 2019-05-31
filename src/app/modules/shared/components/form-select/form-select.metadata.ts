import {VirtualMetadata} from '../../../../types/components/virtual.metadata';

export class FormSelectMetadata implements VirtualMetadata {
  constructor(
    public value: string = '',
    public options: Array<{value: string, html: string}> = [],
    // todo: отрефачить на другой интерфейс
    public props: {
      [key: string]: boolean;
    } = {}
  ) {}
}
