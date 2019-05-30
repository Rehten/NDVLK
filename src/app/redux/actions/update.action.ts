import {Action} from '@ngrx/store';
import {AppActionsEnum} from './actions.enum';
import {VirtualPointerMetadata} from '../../types/components/virtual-pointer.metadata';
import {VirtualPointerComplex} from '../../types/components/virtual-pointer.complex';

export class AppUpdateAction implements Action {
  public type: AppActionsEnum = AppActionsEnum.Update;
  constructor(public $targetComplex: VirtualPointerComplex, public $nextPointer: string) {}
}
