import {Action} from '@ngrx/store';
import {AppActionsEnum} from './actions.enum';
import {VirtualPointerMetadata} from '../../types/components/virtual-pointer.metadata';
import {VirtualPointerComplex} from '../../types/components/virtual-pointer.complex';

export class AppPostAction implements Action {
  public type: AppActionsEnum = AppActionsEnum.Post;
  constructor(public $targetPointer: string, public complex: VirtualPointerComplex) {}
}
