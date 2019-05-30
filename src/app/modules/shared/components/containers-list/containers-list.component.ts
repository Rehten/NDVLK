import {AfterViewInit, Component, ComponentFactory, Input, OnInit, Type} from '@angular/core';
import {VirtualComponent} from '../../../../types/components/virtual.component';
import {ContainersListMetadata} from './containers-list.metadata';
import {VirtualComplexFactory} from '../../../../types/components/virtual.complex-factory';
import {ContainersListComplex} from './containers-list.complex';
import {VirtualPointerComplex} from '../../../../types/components/virtual-pointer.complex';
import {AppAddAction} from '../../../../redux/actions/add.action';
import {VirtualComplex} from '../../../../types/components/virtual.complex';
import {ErrorComplex} from '../error/error.complex';
import {ErrorComponent} from '../error/error.component';
import {ErrorMetadata} from '../error/error.metadata';
import {Store} from '@ngrx/store';
import {VirtualPointerComplexFactory} from '../../../../types/components/virtual-pointer.complex-factory';


@Component({
  selector: 'ndv-containers-list',
  templateUrl: './containers-list.component.html',
  styleUrls: ['./containers-list.component.scss']
})
export class ContainersListComponent implements OnInit, VirtualComponent {
  public static identifier: string = 'ndv-containers-list';
  public static complexFactory: VirtualPointerComplexFactory = new class implements VirtualPointerComplexFactory {
    create(metaData: ContainersListMetadata): ContainersListComplex {
      return new ContainersListComplex(ContainersListComponent, metaData);
    }
  }();

  @Input()
  metadata: ContainersListMetadata = new ContainersListMetadata();
  constructor(private store: Store<Map<string, VirtualComplexFactory>>) { }

  ngOnInit() {
  }

}
