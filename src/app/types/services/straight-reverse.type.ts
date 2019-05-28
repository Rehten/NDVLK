import {Transform} from '../pure-functions/transform.type';

export interface StraightReverse<T, S> {
  straight: Transform<T, S>;
  reverse: Transform<S, T>;
}
