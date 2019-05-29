import { Component, OnInit } from '@angular/core';
import {VirtualComponent} from '../../../../types/components/virtual.component';
import {ErrorMetadata} from './error.metadata';

@Component({
  selector: 'ndv-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit, VirtualComponent<ErrorMetadata> {
  metadata: ErrorMetadata = new ErrorMetadata(`Ошибка`);

  constructor() { }

  ngOnInit() {}
  resolve(metadata: ErrorMetadata): void {
    this.metadata = metadata;
  }

}
