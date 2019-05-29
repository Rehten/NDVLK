import { Component, OnInit } from '@angular/core';
import {VirtualComponent} from '../../../../types/components/virtual.component';
import {FormInputMetadata} from './form-input.metadata';

@Component({
  selector: 'ndv-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.scss']
})
export class FormInputComponent implements OnInit, VirtualComponent {
  metadata: FormInputMetadata;
  constructor() { }

  ngOnInit() {
  }

}
