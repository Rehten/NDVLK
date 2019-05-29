import {Action} from '@ngrx/store';
import {AppActionsEnum} from './actions.enum';
import {VirtualMetadata} from '../../types/components/virtual.metadata';
import {VirtualPointerMetadata} from '../../types/components/virtual-pointer.metadata';

export class AppAddAction implements Action {
  public type: AppActionsEnum = AppActionsEnum.Add;
  constructor(public metadata: VirtualPointerMetadata) {}
}
