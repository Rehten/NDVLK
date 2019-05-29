import { Component, OnInit } from '@angular/core';
import {VirtualComponent} from '../../../../types/components/virtual.component';
import {ErrorMetadata} from './error.metadata';
import {ErrorComplexFactory} from './error.complex-factory';

@Component({
  selector: 'ndv-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit, VirtualComponent {
  static complexFactory: ErrorComplexFactory = new ErrorComplexFactory();

  metadata: ErrorMetadata = new ErrorMetadata();

  constructor() { }

  ngOnInit() {}
  resolve(metadata: ErrorMetadata): void {
    this.metadata = metadata;
  }

}
