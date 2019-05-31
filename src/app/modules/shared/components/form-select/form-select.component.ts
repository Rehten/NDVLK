import { Component, OnInit } from '@angular/core';
import {VirtualComponent} from '../../../../types/components/virtual.component';
import {VirtualComplexFactory} from '../../../../types/components/virtual.complex-factory';
import {FormInputMetadata} from '../form-input/form-input.metadata';
import {FormInputComplex} from '../form-input/form-input.complex';
import {FormSelectMetadata} from './form-select.metadata';
import {FormSelectComplex} from './form-select.complex';

@Component({
  selector: 'ndv-form-select',
  templateUrl: './form-select.component.html',
  styleUrls: ['./form-select.component.scss']
})
export class FormSelectComponent implements OnInit, VirtualComponent {
  public static identifier: string = 'ndv-form-select';
  public static complexFactory: VirtualComplexFactory = new class implements VirtualComplexFactory {
    create(metaData: FormSelectMetadata): FormSelectComplex {
      return new FormSelectComplex(FormSelectComponent, metaData);
    }
  }();

  metadata: FormSelectMetadata;
  constructor() { }

  ngOnInit() {
  }

}
