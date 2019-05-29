import {JSONField} from '../json-field.type';
import {VirtualComponent} from './virtual.component';
import {VirtualMetadata} from './virtual.metadata';
import {VirtualComplex} from './virtual.complex';
import {VirtualPointerMetadata} from './virtual-pointer.metadata';

// предполагается, что этот класс будет содержать данные для декоратора @Input()
export interface VirtualContainerMetadata extends VirtualPointerMetadata {
  inner: VirtualComplex;
  // указатели - это uuidv4, по которым можно быстро найти нужные метаданные в глобальном хранилище store
  $pointer: string;
  $prev: string;
  $next: string;
}
