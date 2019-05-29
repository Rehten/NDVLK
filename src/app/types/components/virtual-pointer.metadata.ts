import {JSONField} from '../json-field.type';
import {VirtualComponent} from './virtual.component';
import {VirtualMetadata} from './virtual.metadata';

// предполагается, что этот класс будет содержать данные для декоратора @Input()
export interface VirtualPointerMetadata extends VirtualMetadata {
  $pointer: string;
  $prev: string;
}
