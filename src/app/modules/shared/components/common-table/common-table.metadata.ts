import {VirtualMetadata} from '../../../../types/components/virtual.metadata';

export class CommonTableMetadata implements VirtualMetadata {
  constructor(
    public headers: Array<string> = [],
    public rows: Array<Array<string>> = []
  ) {}
}
