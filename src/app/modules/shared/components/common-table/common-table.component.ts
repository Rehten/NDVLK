import { Component, OnInit } from '@angular/core';
import {VirtualComponent} from '../../../../types/components/virtual.component';
import {VirtualComplexFactory} from '../../../../types/components/virtual.complex-factory';
import {FormSelectMetadata} from '../form-select/form-select.metadata';
import {FormSelectComplex} from '../form-select/form-select.complex';
import {CommonTableMetadata} from './common-table.metadata';
import {CommonTableComplex} from './common-table.complex';

@Component({
  selector: 'ndv-common-table',
  templateUrl: './common-table.component.html',
  styleUrls: ['./common-table.component.scss']
})
export class CommonTableComponent implements OnInit, VirtualComponent {
  public static identifier: string = 'ndv-common-table';
  public static complexFactory: VirtualComplexFactory = new class implements VirtualComplexFactory {
    create(metaData: CommonTableMetadata): CommonTableComplex {
      return new CommonTableComplex(CommonTableComponent, metaData);
    }
  }();

  metadata: CommonTableMetadata = new CommonTableMetadata();
  constructor() { }

  ngOnInit() {
  }

}
