import {Create} from './create.type';
import {Read} from './read.type';
import {Update} from './update.type';
import {Delete} from './delete.type';
import {Observable} from 'rxjs';

export interface CRUD<T> extends Create<T>, Read<T>, Update<T>, Delete<T> {
  create(entity: T): Observable<T>;
  read(): Observable<T>;
  update(entity: T): Observable<T>;
  delete(entity: T): Observable<T>;
}
