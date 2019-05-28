import {Observable} from 'rxjs';

export interface Update<T> {
  update(entity: T): Observable<T>;
}
