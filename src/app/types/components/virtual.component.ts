import {VirtualMetadata} from './virtual.metadata';
import {ComponentInstance} from '@angular/core/src/render3/interfaces/player';

// базовый компонент - на его основе будет делаться рендер реальных компонентов
export interface VirtualComponent extends ComponentInstance {
  metadata: VirtualMetadata;

  // применяет метаданные к компоненту
  resolve(metadata: VirtualMetadata): void;
}
