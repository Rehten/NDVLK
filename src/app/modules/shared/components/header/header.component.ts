import {Component, Input, OnInit} from '@angular/core';
import {ContainerComplex} from '../container/container.complex';
import {VirtualPointerComplexFactory} from '../../../../types/components/virtual-pointer.complex-factory';
import {ContainersListMetadata} from '../containers-list/containers-list.metadata';
import {ContainersListComplex} from '../containers-list/containers-list.complex';
import {ContainersListComponent} from '../containers-list/containers-list.component';
import {HeaderComplex} from './header.complex';
import {HeaderMetadata} from './header.metadata';

@Component({
  selector: 'ndv-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
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
