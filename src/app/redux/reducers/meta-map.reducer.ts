import {AppState} from '../../app.state';
import {Action} from '@ngrx/store';
import {Reducer} from '../../types/flux/reducers/abstract.reducer';
import {AppActionsEnum} from '../actions/actions.enum';
import {VirtualPointerComplex} from '../../types/components/virtual-pointer.complex';
import {AppAddAction} from '../actions/add.action';
import {AppPostAction} from '../actions/update.action';

type MemoryMap = Map<string, VirtualPointerComplex>;
type MetaPart = [string, VirtualPointerComplex];

export const $metaMapReducer: Reducer<MemoryMap> = (state = new Map<string, VirtualPointerComplex>(), action: Action): MemoryMap => {
  switch (action.type) {
    case AppActionsEnum.Add:
      const $typed: AppAddAction = (action as AppAddAction);
      return new Map<string, VirtualPointerComplex>([...state, [$typed.complex.metadata.$pointer, $typed.complex]]);
    case AppActionsEnum.Post:
      const $update: AppPostAction = (action as AppPostAction);
      return new Map<string, VirtualPointerComplex>([...state, [$update.complex.metadata.$pointer, $update.complex]]
        .map((part: [string, VirtualPointerComplex]): [string, VirtualPointerComplex] => {
          if (part[0] === $update.$targetPointer) {
            if (part[1].metadata.inner instanceof Array) {
              (part[1].metadata.$next as Array<string>).push($update.complex.metadata.$pointer);
              part[1].metadata.inner.push($update.complex);
              $update.complex.metadata.$prev = $update.$targetPointer;
            } else {
              part[1].metadata.$next = $update.complex.metadata.$pointer;
              part[1].metadata.inner = $update.complex;
              $update.complex.metadata.$prev = $update.$targetPointer;
            }
            return [part[0], part[1].componentClass.complexFactory.create(part[1].metadata) as VirtualPointerComplex];
          } else {
            return part;
          }
        }));
    default:
      return state;
  }
};
