import {Action} from '@ngrx/store';
import {AppActionsEnum} from './actions.enum';
import {VirtualPointerMetadata} from '../../types/components/virtual-pointer.metadata';
import {VirtualPointerComplex} from '../../types/components/virtual-pointer.complex';

export class AppUpdateListAction implements Action {
  public type: AppActionsEnum = AppActionsEnum.UpdateList;
  constructor(public $targetComplex: VirtualPointerComplex, public $nextPointer: Array<string>) {}
}
