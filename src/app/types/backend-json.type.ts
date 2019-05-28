import {JSONField} from './json-field.type';

// обобщенное представление любого типа данных, которое приходит и отправляется на бэк
export interface BackendJSON {
  [key: string]: JSONField;
}
