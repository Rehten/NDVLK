import {AppState} from '../../app.state';
import {Action} from '@ngrx/store';
import {Reducer} from '../../types/flux/reducers/abstract.reducer';

export const $metaMapReducer: Reducer<AppState> = (state: AppState, action: Action): AppState => {
  return state;
};
