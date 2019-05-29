import {VirtualMetadata} from '../../../../types/components/virtual.metadata';

export class FormInputMetadata implements VirtualMetadata {
  constructor(
    public value: string = '123',
    // todo: отрефачить на другой интерфейс
    public props: {[key: string]: boolean} = {}
  ) {}
}
