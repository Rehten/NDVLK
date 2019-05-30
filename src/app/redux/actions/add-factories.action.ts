import {Action} from '@ngrx/store';
import {AppActionsEnum} from './actions.enum';
import {VirtualPointerMetadata} from '../../types/components/virtual-pointer.metadata';
import {VirtualComplexFactory} from '../../types/components/virtual.complex-factory';
import {ComponentClass} from '../../types/components/component-class.component';
import {VirtualComponent} from '../../types/components/virtual.component';

export class AppAddFactoriesAction implements Action {
  public type: AppActionsEnum = AppActionsEnum.AddFactories;
  constructor(public componentRefs: ComponentClass<VirtualComponent>[]) {}
}
