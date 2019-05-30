import {Component, Input, OnInit} from '@angular/core';
import {VirtualComponent} from '../../../../../types/components/virtual.component';
import {VirtualComplexFactory} from '../../../../../types/components/virtual.complex-factory';
import {HeaderButtonMetadata} from '../header-button/header-button.metadata';
import {HeaderButtonComplex} from '../header-button/header-button.complex';
import {HeaderInputComplex} from './header-input.complex';
import {HeaderInputMetadata} from './header-input.metadata';

@Component({
  selector: 'ndv-header-input',
  templateUrl: './header-input.component.html',
  styleUrls: ['./header-input.component.scss']
})
export class HeaderInputComponent implements OnInit, VirtualComponent {
  public static identifier: string = 'ndv-header-input';
  public static complexFactory: VirtualComplexFactory = new class implements VirtualComplexFactory {
    create(metaData: HeaderInputMetadata): HeaderInputComplex {
      return new HeaderInputComplex(HeaderInputComponent, metaData);
    }
  }();

  @Input()
  metadata: HeaderInputMetadata = new HeaderInputMetadata('Кнопка', 'danger');

  constructor() { }

  ngOnInit() {
  }

}
