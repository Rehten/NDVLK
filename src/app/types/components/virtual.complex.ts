import {VirtualMetadata} from './virtual.metadata';
import {VirtualComponent} from './virtual.component';
import {Type} from '@angular/core';
import {ComponentClass} from './component-class.component';

// агрегирование класса(не объекта) компонента и данных для него для передачи в компонентную фабрику контейнера ndv-container
export interface VirtualComplex {
  componentClass: ComponentClass<VirtualComponent>;
  metadata: VirtualMetadata;
}
