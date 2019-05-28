import {ComponentInstance} from '@angular/core/src/render3/interfaces/player';
import {Factory} from './factory.type';

// в одной такой карте будет доступно создание любого компонента, находящегося в модуле
export type FactoryMap = Map<string, Factory<ComponentInstance>>;
