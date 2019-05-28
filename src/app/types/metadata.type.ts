import {JSONField} from './json-field.type';

// нужен для фабрики компонентов - данные из экземпляра типа прокинутся в созданный компонент
export interface Metadata {
  input: JSONField;
  name: string;
}
