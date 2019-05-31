import { Component, OnInit } from '@angular/core';
import {VirtualComponent} from '../../../../../../types/components/virtual.component';
import {VirtualComplexFactory} from '../../../../../../types/components/virtual.complex-factory';
import {TextMetadata} from '../../../text/text.metadata';
import {TextComplex} from '../../../text/text.complex';
import {SidebarAccordeonItemMetadata} from './sidebar-accordeon-item.metadata';
import {SidebarAccordeonItemComplex} from './sidebar-accordeon-item.complex';

@Component({
  selector: 'ndv-sidebar-accordeon-item',
  templateUrl: './sidebar-accordeon-item.component.html',
  styleUrls: ['./sidebar-accordeon-item.component.scss']
})
export class SidebarAccordeonItemComponent implements OnInit, VirtualComponent {
  public static identifier: string = 'ndv-sidebar-accordeon-item';
  static complexFactory: VirtualComplexFactory = new class implements VirtualComplexFactory {
    create(metaData: SidebarAccordeonItemMetadata): SidebarAccordeonItemComplex {
      return new SidebarAccordeonItemComplex(SidebarAccordeonItemComponent, metaData);
    }
  };

  metadata: SidebarAccordeonItemMetadata = new SidebarAccordeonItemMetadata();
  constructor() { }

  ngOnInit() {
  }

}
