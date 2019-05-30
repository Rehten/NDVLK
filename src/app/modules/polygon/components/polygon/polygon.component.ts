import {Component, OnInit} from '@angular/core';
import {PolygonReadService} from '../../services/polygon-read.service';
import {PolygonPartEntity} from './polygon.part-entity';
import {ErrorMetadata} from '../../../shared/components/error/error.metadata';
import {ContainerMetadata} from '../../../shared/components/container/container.metadata';
import {ErrorComplex} from '../../../shared/components/error/error.complex';
import {ErrorComponent} from '../../../shared/components/error/error.component';
import {FormControl, FormGroup} from '@angular/forms';
import {AppState} from '../../../../app.state';
import {Store} from '@ngrx/store';
import {AppAddAction} from '../../../../redux/actions/add.action';
import {of} from 'rxjs';
import {ContainerComplex} from '../../../shared/components/container/container.complex';
import {ContainerComponent} from '../../../shared/components/container/container.component';
import {TextComplex} from '../../../shared/components/text/text.complex';
import {TextComponent} from '../../../shared/components/text/text.component';
import {TextMetadata} from '../../../shared/components/text/text.metadata';
import {LayoutService} from '../../services/layout.service';
import {UuidService} from '../../../shared/services/uuid.service';
import {Action} from 'rxjs/internal/scheduler/Action';
import {VirtualPointerMetadata} from '../../../../types/components/virtual-pointer.metadata';
import {VirtualComplexFactory} from '../../../../types/components/virtual.complex-factory';
import {VirtualMetadata} from '../../../../types/components/virtual.metadata';
import {FormInputMetadata} from '../../../shared/components/form-input/form-input.metadata';

@Component({
  selector: 'ndv-polygon',
  templateUrl: './polygon.component.html',
  styleUrls: ['./polygon.component.scss']
})
export class PolygonComponent implements OnInit {
  private $create: string = '';
  private $text: string = '';
  private $componentsList: Array<string>;

  private $containerMetaData: Array<VirtualPointerMetadata> = [new ContainerMetadata()];
  private $containerMetaDataCustom: ContainerMetadata = new ContainerMetadata(new ErrorComplex(ErrorComponent, new ErrorMetadata('Кастомная ошибка')));

  constructor(
    private polygonReadService: PolygonReadService,
    private store: Store<AppState>,
    private layoutService: LayoutService,
    private uuidService: UuidService) {
    store.select(state => state.factories).subscribe((map) => {
      this.$componentsList = [...map].map<string>(data => data[0]);
    });
    store.select(state => state.metaMap).subscribe((map) => {
      this.$containerMetaData = [...map].filter((state) => !state[1].metadata.$prev).map((state) => state[1].metadata);
    });
  }

  changeComponentType($event: any) {
    this.$create = $event.target.value;
  }

  ngOnInit() {
    this.polygonReadService.read().subscribe((entity: PolygonPartEntity): void => {
      console.log(entity);
    });
  }

  submit() {
    const childPointer1 = this.uuidService.generate();

    this.store.select(state => state.factories).subscribe((map: Map<string, VirtualComplexFactory>) => {
      let metaData: VirtualMetadata;
      switch (this.$create) {
        case 'ndv-text':
          metaData = new TextMetadata(this.$text);
          break;
        case 'ndv-error':
          metaData = new ErrorMetadata(this.$text);
          break;
        case 'ndv-form-input':
          metaData = new FormInputMetadata(this.$text);
          break;
        default:
          break;
      }

      this.store.dispatch(new AppAddAction(new ContainerComplex(ContainerComponent, new ContainerMetadata(
        map.get(this.$create).create(metaData),
        childPointer1
      ))));
    });
  }
}
