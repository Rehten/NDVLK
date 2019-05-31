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
import {AppPostAction} from '../../../../redux/actions/update.action';
import {VirtualPointerComplex} from '../../../../types/components/virtual-pointer.complex';
import {FormInputComponent} from '../../../shared/components/form-input/form-input.component';
import {HeaderComplex} from '../../../shared/components/header/header.complex';
import {HeaderComponent} from '../../../shared/components/header/header.component';
import {FormInputComplex} from '../../../shared/components/form-input/form-input.complex';
import {SidebarAccordeonItemComplex} from '../../../shared/components/sidebar/sidebar-accordeon/sidebar-accordeon-item/sidebar-accordeon-item.complex';
import {SidebarAccordeonItemComponent} from '../../../shared/components/sidebar/sidebar-accordeon/sidebar-accordeon-item/sidebar-accordeon-item.component';
import {SidebarAccordeonItemMetadata} from '../../../shared/components/sidebar/sidebar-accordeon/sidebar-accordeon-item/sidebar-accordeon-item.metadata';
import {SidebarAccordeonComplex} from '../../../shared/components/sidebar/sidebar-accordeon/sidebar-accordeon.complex';
import {SidebarAccordeonComponent} from '../../../shared/components/sidebar/sidebar-accordeon/sidebar-accordeon.component';
import {SidebarAccordeonMetadata} from '../../../shared/components/sidebar/sidebar-accordeon/sidebar-accordeon.metadata';
import {SidebarComponent} from '../../../shared/components/sidebar/sidebar.component';
import {SidebarMetadata} from '../../../shared/components/sidebar/sidebar.metadata';
import {SidebarComplex} from '../../../shared/components/sidebar/sidebar.complex';
import {FormSelectComplex} from '../../../shared/components/form-select/form-select.complex';
import {FormSelectComponent} from '../../../shared/components/form-select/form-select.component';
import {FormSelectMetadata} from '../../../shared/components/form-select/form-select.metadata';

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
      case 'ndv-container':
        return new ContainerComplex(ContainerComponent, new ContainerMetadata(null, this.$pointer));
      case 'ndv-text':
        return new ContainerComplex(ContainerComponent, new ContainerMetadata(new TextComplex(TextComponent, new TextMetadata(this.$text)), this.$pointer));
      case 'ndv-error':
        return new ContainerComplex(ContainerComponent, new ContainerMetadata(new ErrorComplex(ErrorComponent, new ErrorMetadata(this.$text)), this.$pointer));
      case 'ndv-form-input':
        return new ContainerComplex(ContainerComponent, new ContainerMetadata(new FormInputComplex(FormInputComponent, new FormInputMetadata(this.$text)), this.$pointer));
      case 'ndv-form-select':
        return new ContainerComplex(ContainerComponent, new ContainerMetadata(new FormSelectComplex(FormSelectComponent, new FormSelectMetadata(this.$text, this.$text.split(/ /g).map(option => ({value: option, html: option})))), this.$pointer));
      case 'ndv-containers-list':
        return new ContainersListComplex(ContainersListComponent, new ContainersListMetadata([], this.$pointer, [], this.$prev));
      case 'ndv-header':
        return new HeaderComplex(HeaderComponent, new HeaderMetadata([], this.$pointer, [], this.$prev));
      case 'ndv-header-button':
        return new ContainerComplex(ContainerComponent, new ContainerMetadata(new HeaderButtonComplex(HeaderButtonComponent, new HeaderButtonMetadata(this.$text, this.$color)), this.$pointer));
      case 'ndv-header-input':
        return new ContainerComplex(ContainerComponent, new ContainerMetadata(new HeaderInputComplex(HeaderInputComponent, new HeaderInputMetadata(this.$text, this.$color)), this.$pointer));
      case 'ndv-sidebar-accordeon-item':
        return new ContainerComplex(ContainerComponent, new ContainerMetadata(new SidebarAccordeonItemComplex(SidebarAccordeonItemComponent, new SidebarAccordeonItemMetadata(this.$text, this.$color)), this.$pointer));
      case 'ndv-sidebar-accordeon':
        return new SidebarAccordeonComplex(SidebarAccordeonComponent, new SidebarAccordeonMetadata([], this.$text, this.$pointer, [], this.$prev));
      case 'ndv-sidebar':
        return new SidebarComplex(SidebarComponent, new SidebarMetadata([], this.$pointer, [], this.$prev));
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
