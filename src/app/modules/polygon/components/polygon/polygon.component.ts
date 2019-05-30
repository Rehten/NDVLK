import {Component, OnInit} from '@angular/core';
import {PolygonReadService} from '../../services/polygon-read.service';
import {PolygonPartEntity} from './polygon.part-entity';
import {ErrorMetadata} from '../../../shared/components/error/error.metadata';
import {ContainerMetadata} from '../../../shared/components/container/container.metadata';
import {ErrorComplex} from '../../../shared/components/error/error.complex';
import {ErrorComponent} from '../../../shared/components/error/error.component';
import {AppState} from '../../../../app.state';
import {Store} from '@ngrx/store';
import {AppAddAction} from '../../../../redux/actions/add.action';
import {ContainerComplex} from '../../../shared/components/container/container.complex';
import {ContainerComponent} from '../../../shared/components/container/container.component';
import {TextComplex} from '../../../shared/components/text/text.complex';
import {TextComponent} from '../../../shared/components/text/text.component';
import {TextMetadata} from '../../../shared/components/text/text.metadata';
import {LayoutService} from '../../services/layout.service';
import {UuidService} from '../../../shared/services/uuid.service';
import {VirtualPointerMetadata} from '../../../../types/components/virtual-pointer.metadata';
import {VirtualComplexFactory} from '../../../../types/components/virtual.complex-factory';
import {FormInputMetadata} from '../../../shared/components/form-input/form-input.metadata';
import {ContainersListMetadata} from '../../../shared/components/containers-list/containers-list.metadata';
import {HeaderMetadata} from '../../../shared/components/header/header.metadata';
import {HeaderButtonMetadata} from '../../../shared/components/header/header-button/header-button.metadata';
import {HeaderButtonComplex} from '../../../shared/components/header/header-button/header-button.complex';
import {HeaderButtonComponent} from '../../../shared/components/header/header-button/header-button.component';
import {HeaderInputMetadata} from '../../../shared/components/header/header-input/header-input.metadata';
import {HeaderInputComponent} from '../../../shared/components/header/header-input/header-input.component';
import {HeaderInputComplex} from '../../../shared/components/header/header-input/header-input.complex';
import {ContainersListComplex} from '../../../shared/components/containers-list/containers-list.complex';
import {ContainersListComponent} from '../../../shared/components/containers-list/containers-list.component';
import {VirtualComplex} from '../../../../types/components/virtual.complex';
import {AppPostAction} from '../../../../redux/actions/update.action';

@Component({
  selector: 'ndv-polygon',
  templateUrl: './polygon.component.html',
  styleUrls: ['./polygon.component.scss']
})
export class PolygonComponent implements OnInit {
  private $pointersList: Array<string> = [];
  private $create: string = '';
  private $text: string = '';
  private $color: string = '';
  private $pointer: string = '';
  private $prev: string = '';
  private $componentsList: Array<string>;

  private $containerMetaData: Array<VirtualPointerMetadata> = [];

  constructor(
    private polygonReadService: PolygonReadService,
    private store: Store<AppState>,
    private layoutService: LayoutService,
    private uuidService: UuidService) {
    store.dispatch(new AppAddAction(new ContainerComplex(ContainerComponent, new ContainerMetadata(new TextComplex(TextComponent, new TextMetadata('1')), 'root'))));
    store.select(state => state.factories).subscribe((map) => {
      this.$componentsList = [...map].map<string>(data => data[0]);
    });
    store.select(state => state.metaMap).subscribe((map) => {
      this.$pointersList = [...map].map(state => state[0]);
      this.$containerMetaData = [...map].filter((state) => !state[1].metadata.$prev).map((state) => state[1].metadata);
      console.log(map, this.$containerMetaData);
    });
  }

  changeComponentType($event: any) {
    this.$create = $event.target.value;
  }

  ngOnInit() {
  }

  // generateMeta(): VirtualComplex {
  //   switch (this.$create) {
  //     case 'ndv-text':
  //     case 'ndv-error':
  //     case 'ndv-form-input':
  //     case 'ndv-containers-list':
  //     case 'ndv-header':
  //     case 'ndv-header-button':
  //     case 'ndv-header-input':
  //     default:
  //       break;
  //   }
  // }

  submit() {
    this.store.select(state => state.factories).subscribe((map: Map<string, VirtualComplexFactory>) => {
      this.store.dispatch(new AppPostAction('root', new ContainerComplex(ContainerComponent, new ContainerMetadata(
        new TextComplex(TextComponent, new TextMetadata('321321')), this.uuidService.generate()
      ))));
    });
  }
}
