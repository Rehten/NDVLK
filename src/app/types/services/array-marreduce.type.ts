import {Transform} from '../pure-functions/transform.type';
import {ArrayFold} from '../pure-functions/array-fold.type';

export interface ArrayMapReduce<I, O> {
  mapReduce(data: Array<I>, map: Transform<I, O>, reduce: ArrayFold<O>): O;
}
