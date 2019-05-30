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
import {VirtualPointerComplex} from '../../../../types/components/virtual-pointer.complex';
import {FormInputComponent} from '../../../shared/components/form-input/form-input.component';
import {HeaderComplex} from '../../../shared/components/header/header.complex';
import {HeaderComponent} from '../../../shared/components/header/header.component';
import {FormInputComplex} from '../../../shared/components/form-input/form-input.complex';

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

  generateMeta(): VirtualPointerComplex {
    switch (this.$create) {
      case 'ndv-text':
        return new ContainerComplex(ContainerComponent, new ContainerMetadata(new TextComplex(TextComponent, new TextMetadata(this.$text))));
      case 'ndv-error':
        return new ContainerComplex(ContainerComponent, new ContainerMetadata(new ErrorComplex(ErrorComponent, new ErrorMetadata(this.$text))));
      case 'ndv-form-input':
        return new ContainerComplex(ContainerComponent, new ContainerMetadata(new FormInputComplex(FormInputComponent, new FormInputMetadata(this.$text))));
      case 'ndv-containers-list':
        return new ContainersListComplex(ContainersListComponent, new ContainersListMetadata([], this.$pointer, [], this.$prev));
      case 'ndv-header':
        return new HeaderComplex(HeaderComponent, new HeaderMetadata([], this.$pointer, [], this.$prev));
      case 'ndv-header-button':
        return new ContainerComplex(ContainerComponent, new ContainerMetadata(new HeaderButtonComplex(HeaderButtonComponent, new HeaderButtonMetadata(this.$text, this.$color))));
      case 'ndv-header-input':
        return new ContainerComplex(ContainerComponent, new ContainerMetadata(new HeaderInputComplex(HeaderInputComponent, new HeaderInputMetadata(this.$text, this.$color))));
      default:
        break;
    }
  }

  submit() {
    this.store.select(state => state.factories).subscribe((map: Map<string, VirtualComplexFactory>) => {
      this.store.dispatch(new AppPostAction(this.$prev, this.generateMeta()));
    });
  }
}
