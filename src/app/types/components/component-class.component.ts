import {Type} from '@angular/core';
import {VirtualComplexFactory} from './virtual.complex-factory';
import {VirtualComplex} from './virtual.complex';
import {VirtualComponent} from './virtual.component';
import {VirtualMetadata} from './virtual.metadata';

// требует наличие статического свойства-фабрики в каждом классе компонента для рендеринга
export interface ComponentClass<T extends VirtualComponent> extends Type<T> {
  complexFactory: VirtualComplexFactory;
}
