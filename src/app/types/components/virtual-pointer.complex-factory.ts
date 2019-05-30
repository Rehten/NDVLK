import {VirtualMetadata} from './virtual.metadata';
import {VirtualComponent} from './virtual.component';
import {Type} from '@angular/core';
import {VirtualComplex} from './virtual.complex';
import {ComponentClass} from './component-class.component';
import {VirtualPointerComplex} from './virtual-pointer.complex';

// Фабрика, которая выдает объект-комплекс со ссылкой на класс и метаданными для рендеринга фабрикой компонентов
export interface VirtualPointerComplexFactory {
  create(metaData: VirtualMetadata): VirtualPointerComplex;
}
