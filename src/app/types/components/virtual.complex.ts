import {VirtualMetadata} from './virtual.metadata';
import {VirtualComponent} from './virtual.component';
import {Type} from '@angular/core';
import {ComponentClass} from './static-factory.component';

// агрегирование класса(не объекта) компонента и данных для него для передачи в компонентную фабрику контейнера
export interface VirtualComplex<T extends VirtualComponent<R>, R extends VirtualMetadata> {
  componentClass: ComponentClass<T, R>;
  metadata: R;
}
