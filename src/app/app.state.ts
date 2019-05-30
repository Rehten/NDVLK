import {VirtualComplex} from './types/components/virtual.complex';
import {VirtualComplexFactory} from './types/components/virtual.complex-factory';
import {VirtualPointerComplex} from './types/components/virtual-pointer.complex';
import {VirtualPointerMetadata} from './types/components/virtual-pointer.metadata';

export interface AppState {
  // в этом свойстве определяется, как будет выглядеть приложение
  metaMap: Map<string, VirtualPointerComplex>;
  // Здесь будут фабрики для создания данных для фабрики компонентов
  factories: Map<string, VirtualComplexFactory>;
}
