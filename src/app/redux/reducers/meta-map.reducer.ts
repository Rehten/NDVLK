import {AppState} from '../../app.state';
import {Action} from '@ngrx/store';
import {Reducer} from '../../types/flux/reducers/abstract.reducer';
import {AppActionsEnum} from '../actions/actions.enum';
import {VirtualPointerComplex} from '../../types/components/virtual-pointer.complex';
import {AppAddAction} from '../actions/add.action';
import {VirtualPointerMetadata} from '../../types/components/virtual-pointer.metadata';
import {AppUpdateAction} from '../actions/update.action';

type MemoryMap = Map<string, VirtualPointerComplex>;
type MetaPart = [string, VirtualPointerComplex];

export const $metaMapReducer: Reducer<MemoryMap> = (state = new Map<string, VirtualPointerComplex>(), action: Action): MemoryMap => {
  switch (action.type) {
    case AppActionsEnum.Add:
      const $typed: AppAddAction = (action as AppAddAction);
      return new Map<string, VirtualPointerComplex>([...state, [$typed.complex.metadata.$pointer, $typed.complex]]);
    default:
      return state;
  }
};
