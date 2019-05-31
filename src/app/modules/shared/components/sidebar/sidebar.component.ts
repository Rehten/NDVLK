import {Component, Input, OnInit} from '@angular/core';
import {VirtualComponent} from '../../../../types/components/virtual.component';
import {VirtualPointerComplexFactory} from '../../../../types/components/virtual-pointer.complex-factory';
import {ContainersListMetadata} from '../containers-list/containers-list.metadata';
import {SidebarMetadata} from './sidebar.metadata';
import {SidebarComplex} from './sidebar.complex';

@Component({
  selector: 'ndv-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit, VirtualComponent {
  public static identifier: string = 'ndv-sidebar';
  public static complexFactory: VirtualPointerComplexFactory = new class implements VirtualPointerComplexFactory {
    create(metaData: SidebarMetadata): SidebarComplex {
      return new SidebarComplex(SidebarComponent, metaData);
    }
  }();

  @Input()
  metadata: SidebarMetadata = new SidebarMetadata();
  constructor() { }

  ngOnInit() {
  }
}
