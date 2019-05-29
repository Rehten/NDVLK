import {VirtualMetadata} from './virtual.metadata';
import {ComponentInstance} from '@angular/core/src/render3/interfaces/player';
import {VirtualComponent} from './virtual.component';
import {VirtualComplexFactory} from './virtual.complex-factory';
import {VirtualComplex} from './virtual.complex';

// корневой компонент внутри ангуляровского модуля - должен добавить в хранилище все остальные компоненты этого модуля для рендеринга
export interface FeatureComponent<T extends VirtualMetadata> extends VirtualComponent {
  // должен содержать все компоненты, что задекларированы(не импортированы) в этом модуле.
  readonly $$complexFactoryMap: Map<string, VirtualComplexFactory>;

  // добавляет в хранилище новые компоненты для рендеринга. Нужно, чтобы дополнять фабрику новыми компонентами по мере их подгрузки
  load(): void;
}
