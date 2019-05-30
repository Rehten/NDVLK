import {VirtualMetadata} from './virtual.metadata';
import {VirtualComponent} from './virtual.component';
import {Type} from '@angular/core';
import {ComponentClass} from './component-class.component';
import {VirtualPointerMetadata} from './virtual-pointer.metadata';
import {VirtualComplex} from './virtual.complex';

// агрегирование класса(не объекта) компонента и данных для него для передачи в компонентную фабрику контейнера ndv-container
export interface VirtualPointerComplex extends VirtualComplex {
  componentClass: ComponentClass<VirtualComponent>;
  metadata: VirtualPointerMetadata;
}
