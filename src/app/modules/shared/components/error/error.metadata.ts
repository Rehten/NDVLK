import {VirtualMetadata} from '../../../../types/components/virtual.metadata';

export class ErrorMetadata implements VirtualMetadata {
  [key: string]: any;
  constructor(
    public text: string = 'Стандартная ошибка'
  ) {}
}
