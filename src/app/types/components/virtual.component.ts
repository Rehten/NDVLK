import {VirtualMetadata} from './virtual.metadata';
import {ComponentInstance} from '@angular/core/src/render3/interfaces/player';

// базовый компонент - на его основе будет делаться рендер реальных компонентов
export interface VirtualComponent<T extends VirtualMetadata> extends ComponentInstance {
  metadata: T;

  // применяет метаданные к компоненту
  resolve(metadata: T): void;
}
