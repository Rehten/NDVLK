import {Component, Input, OnInit} from '@angular/core';
import {VirtualComponent} from '../../../../../types/components/virtual.component';
import {VirtualPointerComplexFactory} from '../../../../../types/components/virtual-pointer.complex-factory';
import {HeaderMetadata} from '../header.metadata';
import {HeaderComplex} from '../header.complex';
import {ContainersListMetadata} from '../../containers-list/containers-list.metadata';
import {HeaderButtonMetadata} from './header-button.metadata';
import {HeaderButtonComplex} from './header-button.complex';
import {VirtualComplexFactory} from '../../../../../types/components/virtual.complex-factory';

@Component({
  selector: 'ndv-header-button',
  templateUrl: './header-button.component.html',
  styleUrls: ['./header-button.component.scss']
})
export class HeaderButtonComponent implements OnInit, VirtualComponent {
  public static identifier: string = 'ndv-header-button';
  public static complexFactory: VirtualComplexFactory = new class implements VirtualComplexFactory {
    create(metaData: HeaderButtonMetadata): HeaderButtonComplex {
      return new HeaderButtonComplex(HeaderButtonComponent, metaData);
    }
  }();

  @Input()
  metadata: HeaderButtonMetadata = new HeaderButtonMetadata('Кнопка', 'danger');
  constructor() { }

  ngOnInit() {
  }

}
