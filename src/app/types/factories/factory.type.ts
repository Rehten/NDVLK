import {ComponentInstance} from '@angular/core/src/render3/interfaces/player';
import {Metadata} from '../metadata.type';

export interface Factory<T extends ComponentInstance> {
  create(metadata: Metadata): T;
}
