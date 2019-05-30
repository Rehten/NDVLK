import { Component, OnInit } from '@angular/core';
import {VirtualComponent} from '../../../../types/components/virtual.component';
import {ErrorMetadata} from './error.metadata';
import {VirtualComplexFactory} from '../../../../types/components/virtual.complex-factory';
import {ErrorComplex} from './error.complex';

@Component({
  selector: 'ndv-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit, VirtualComponent {
  public static identifier: string = 'ndv-error';
  static complexFactory: VirtualComplexFactory = new class implements VirtualComplexFactory {
    create(metaData: ErrorMetadata = null): ErrorComplex {
      return new ErrorComplex(ErrorComponent, metaData);
    }
  };

  metadata: ErrorMetadata = new ErrorMetadata();

  constructor() { }

  ngOnInit() {}

}
