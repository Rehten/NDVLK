import {Component, Input, OnInit} from '@angular/core';
import {VirtualPointerComplexFactory} from '../../../../types/components/virtual-pointer.complex-factory';
import {ContainersListMetadata} from '../containers-list/containers-list.metadata';
import {HeaderComplex} from './header.complex';
import {HeaderMetadata} from './header.metadata';
import {VirtualComponent} from '../../../../types/components/virtual.component';

@Component({
  selector: 'ndv-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, VirtualComponent {
  public static identifier: string = 'ndv-header';
  public static complexFactory: VirtualPointerComplexFactory = new class implements VirtualPointerComplexFactory {
    create(metaData: HeaderMetadata): HeaderComplex {
      return new HeaderComplex(HeaderComponent, metaData);
    }
  }();

  @Input()
  metadata: ContainersListMetadata = new ContainersListMetadata();

  ngOnInit() {}

}
