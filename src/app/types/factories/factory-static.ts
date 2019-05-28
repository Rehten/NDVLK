import {ComponentInstance} from '@angular/core/src/render3/interfaces/player';
import {Factory} from './factory.type';

export interface FactoryStatic<T extends ComponentInstance> extends Factory<T> {
  create(): T;
}
