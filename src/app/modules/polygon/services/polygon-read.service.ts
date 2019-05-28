import {Injectable} from '@angular/core';
import {BackendJSON} from '../../../types/backend-json.type';
import {Read} from '../../../types/services/read.type';
import {forkJoin, Observable, of} from 'rxjs';
import {PolygonPartEntity} from '../components/polygon/polygon.part-entity';
import {map, switchMap, toArray} from 'rxjs/operators';
import {PolygonMapReduceService} from './map-reduce.service';

@Injectable({
  providedIn: 'root'
})
export class PolygonReadService implements Read<PolygonPartEntity> {
  constructor(private polygonMapReduceService: PolygonMapReduceService) {
  }

  read(): Observable<PolygonPartEntity> {
    const data1: BackendJSON = {total: 3, data: ['1']};
    const data2: BackendJSON = {total: 3, data: ['2']};
    const data3: BackendJSON = {total: 3, data: ['3']};

    return of(data1)
      .pipe(
        switchMap((resp: BackendJSON): Observable<Array<BackendJSON>> => forkJoin(of(resp), of(data2), of(data3))),
        map((result: Array<BackendJSON>): PolygonPartEntity => (this.polygonMapReduceService.mapReduce(result)))
      );
  };
}
