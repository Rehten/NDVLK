import {VirtualMetadata} from '../../../../types/components/virtual.metadata';

export class TextMetadata implements VirtualMetadata {
  constructor(
    public text: string = 'Стандартная ошибка'
  ) {}
}
