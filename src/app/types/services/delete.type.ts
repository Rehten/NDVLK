import {Observable} from 'rxjs';

export interface Delete<T> {
  delete(entity: T): Observable<T>;
}
