import {Injectable} from '@angular/core';
import {ArrayMapReduce} from '../../../types/services/array-marreduce.type';
import {BackendJSON} from '../../../types/backend-json.type';
import {PolygonPartEntity} from '../components/polygon/polygon.part-entity';

@Injectable()
export class PolygonMapReduceService implements ArrayMapReduce<BackendJSON, PolygonPartEntity> {

  constructor() {
  }

  // агрегирует данные со всех респонсов в одном объекте
  mapReduce(data: Array<BackendJSON>): PolygonPartEntity {
    return data
      .map((json: BackendJSON): PolygonPartEntity => {
        return new PolygonPartEntity(Number(json.total as string), json.data as Array<string>);
      })
      .reduce((prev: PolygonPartEntity = null, cur: PolygonPartEntity): PolygonPartEntity => {
        return new PolygonPartEntity(cur.count, prev && prev.polygonsIds.concat(cur.polygonsIds));
      });
  }
}
