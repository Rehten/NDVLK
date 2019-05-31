import {Component, Input, OnInit} from '@angular/core';
import {VirtualComponent} from '../../../../../types/components/virtual.component';
import {VirtualPointerComplexFactory} from '../../../../../types/components/virtual-pointer.complex-factory';
import {ContainersListMetadata} from '../../containers-list/containers-list.metadata';
import {SidebarAccordeonMetadata} from './sidebar-accordeon.metadata';
import {SidebarAccordeonComplex} from './sidebar-accordeon.complex';

@Component({
  selector: 'ndv-sidebar-accordeon',
  templateUrl: './sidebar-accordeon.component.html',
  styleUrls: ['./sidebar-accordeon.component.scss']
})
export class SidebarAccordeonComponent implements OnInit, VirtualComponent {
  public static identifier: string = 'ndv-sidebar-accordeon';
  public static complexFactory: VirtualPointerComplexFactory = new class implements VirtualPointerComplexFactory {
    create(metaData: SidebarAccordeonMetadata): SidebarAccordeonComplex {
      return new SidebarAccordeonComplex(SidebarAccordeonComponent, metaData);
    }
  }();

  @Input()
  metadata: SidebarAccordeonMetadata = new SidebarAccordeonMetadata();

  public isFolded: boolean = true;
  constructor() { }

  ngOnInit() {}
}
