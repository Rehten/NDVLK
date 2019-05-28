import {BackendJSON} from './backend-json.type';

export declare type JSONField = string | number | boolean | null | undefined | BackendJSON |
  Array<string> | Array<number> | Array<boolean> | Array<null> | Array<undefined> | Array<BackendJSON>;
