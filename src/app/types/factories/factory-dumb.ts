import {ComponentInstance} from '@angular/core/src/render3/interfaces/player';
import {Factory} from './factory.type';
import {Metadata} from '../metadata.type';

export interface FactoryDumb<T extends ComponentInstance> extends Factory<T> {
  create(metadata?: Metadata): T;
}
