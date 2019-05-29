import {JSONField} from '../json-field.type';
import {VirtualComponent} from './virtual.component';
import {VirtualMetadata} from './virtual.metadata';
import {VirtualComplex} from './virtual.complex';

// предполагается, что этот класс будет содержать данные для декоратора @Input()
export interface VirtualContainerMetadata extends VirtualMetadata {
  inner: VirtualComplex<VirtualComponent<VirtualMetadata>, VirtualMetadata>;
}
