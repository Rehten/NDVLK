import {Transform} from '../pure-functions/transform.type';
import {Fold} from '../pure-functions/array-fold.type';

export interface ArrayMapReduce<I, O> {
  mapReduce(data: Array<I>, map: Transform<I, O>, reduce: Fold<O>): O;
}
