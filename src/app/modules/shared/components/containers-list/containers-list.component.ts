import {Component, Input, OnInit} from '@angular/core';
import {VirtualComponent} from '../../../../types/components/virtual.component';
import {ContainersListMetadata} from './containers-list.metadata';
import {VirtualComplexFactory} from '../../../../types/components/virtual.complex-factory';
import {ContainersListComplex} from './containers-list.complex';


@Component({
  selector: 'ndv-containers-list',
  templateUrl: './containers-list.component.html',
  styleUrls: ['./containers-list.component.scss']
})
export class ContainersListComponent implements OnInit, VirtualComponent {
  public static complexFactory: VirtualComplexFactory = new class implements VirtualComplexFactory {
    create(metaData: ContainersListMetadata): ContainersListComplex {
      return new ContainersListComplex(ContainersListComponent, metaData);
    }
  }();

  @Input()
  metadata: ContainersListMetadata = new ContainersListMetadata()
  constructor() { }

  ngOnInit() {
  }

}
