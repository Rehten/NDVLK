import {Reducer} from '../../types/flux/reducers/abstract.reducer';
import {AppState} from '../../app.state';
import {Action} from '@ngrx/store';
import {AppActionsEnum} from '../actions/actions.enum';
import {VirtualComplexFactory} from '../../types/components/virtual.complex-factory';
import {AppAddFactoriesAction} from '../actions/add-factories.action';
import {ComponentClass} from '../../types/components/component-class.component';
import {VirtualComponent} from '../../types/components/virtual.component';

type FactoriesSH = Map<string, VirtualComplexFactory>

export const $factoriesReducer: Reducer<FactoriesSH> = (state = new Map<string, VirtualComplexFactory>(), action) => {
  switch (action.type) {
    case AppActionsEnum.AddFactories:
      const additionalStatePart: FactoriesSH = new Map<string, VirtualComplexFactory>();
      (action as AppAddFactoriesAction).componentRefs.forEach((ref: ComponentClass<VirtualComponent>): void => {
        additionalStatePart.set(ref.identifier, ref.complexFactory);
      });
      return new Map<string, VirtualComplexFactory>([...state, ...additionalStatePart]);
    default:
      return state;
  }
};
