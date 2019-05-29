import {VirtualMetadata} from './virtual.metadata';
import {VirtualComponent} from './virtual.component';
import {Type} from '@angular/core';
import {VirtualComplex} from './virtual.complex';
import {ComponentClass} from './static-factory.component';

// Фабрика, которая выдает объект-комплекс со ссылкой на класс и метаданными для рендеринга фабрикой компонентов
export interface VirtualComplexFactory<T extends VirtualComplex<R, C>, R extends VirtualComponent<C>, C extends VirtualMetadata> {
  create(metaData: C): ComponentClass<R, C>;
}
