import {JSONField} from '../json-field.type';
import {VirtualComponent} from './virtual.component';
import {VirtualMetadata} from './virtual.metadata';
import {VirtualComplex} from './virtual.complex';

// предполагается, что этот класс будет содержать данные для декоратора @Input()
export interface VirtualContainersListMetadata extends VirtualMetadata {
  inner: Array<VirtualComplex>;
  // указатели - это uuidv4, по которым можно быстро найти нужные метаданные в глобальном хранилище store
  $pointersPrev: Array<string>;
  $pointersNext: Array<string>;
}
