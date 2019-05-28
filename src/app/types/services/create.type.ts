import {Observable} from 'rxjs';

export interface Create<T> {
  create(entity: T): Observable<T>;
}
