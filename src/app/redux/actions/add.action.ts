import {Action} from '@ngrx/store';
import {AppActionsEnum} from './actions.enum';
import {VirtualPointerMetadata} from '../../types/components/virtual-pointer.metadata';
import {VirtualPointerComplex} from '../../types/components/virtual-pointer.complex';

export class AppAddAction implements Action {
  public type: AppActionsEnum = AppActionsEnum.Add;
  constructor(public complex: VirtualPointerComplex) {}
}
