import {VirtualMetadata} from '../../../../types/components/virtual.metadata';

export class ErrorMetadata implements VirtualMetadata {
  constructor(
    public text: string
  ) {}
}
