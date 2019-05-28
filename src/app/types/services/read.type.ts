import {Observable} from 'rxjs';

export interface Read<T> {
  read(): Observable<T>;
}
