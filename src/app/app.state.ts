import {VirtualComplex} from './types/components/virtual.complex';
import {VirtualComplexFactory} from './types/components/virtual.complex-factory';

export interface AppState {
  // в этом свойстве определяется, как будет выглядеть приложение
  metaMap: Array<VirtualComplex>;
  // Здесь будут фабрики для создания данных для фабрики компонентов
  factories: Map<string, VirtualComplexFactory>;
}
