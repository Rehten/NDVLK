import {VirtualPointerMetadata} from './virtual-pointer.metadata';

// предполагается, что этот класс будет содержать данные для декоратора @Input()
export interface VirtualRootMetadata extends VirtualPointerMetadata {
  $pointer: 'root';
  $prev: string;
}
