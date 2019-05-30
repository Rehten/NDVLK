import { Component, OnInit } from '@angular/core';
import {VirtualComponent} from '../../../../types/components/virtual.component';
import {FormInputMetadata} from './form-input.metadata';
import {VirtualComplexFactory} from '../../../../types/components/virtual.complex-factory';
import {FormInputComplex} from './form-input.complex';

;

@Component({
  selector: 'ndv-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.scss']
})
export class FormInputComponent implements OnInit, VirtualComponent {
  public static identifier: string = 'ndv-form-input';
  public static complexFactory: VirtualComplexFactory = new class implements VirtualComplexFactory {
    create(metaData: FormInputMetadata): FormInputComplex {
      return new FormInputComplex(FormInputComponent, metaData);
    }
  }();

  metadata: FormInputMetadata;
  constructor() { }

  ngOnInit() {
  }

}
