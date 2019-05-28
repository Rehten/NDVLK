import {EntityContainer} from './entity.container.type';

/* Назначение: если нужно подтянуть 300 айтемов,
    а за один запрос подтягивается максимум 75 айтемов,
    но при этом известно их общее количество(300)
 */
export interface EntitiesListContainer<R> extends EntityContainer<Array<R>> {
  entity: Array<R>;
  total: number;
}
