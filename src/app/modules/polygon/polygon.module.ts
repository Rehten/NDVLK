import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PolygonComponent } from './components/polygon/polygon.component';
import {PolygonRoutingModule} from './polygon.routing';
import {PolygonMapReduceService} from './services/map-reduce.service';
import {PolygonReadService} from './services/polygon-read.service';
import { PolygonRowComponent } from './components/polygon-row/polygon-row.component';
import {SharedModule} from '../shared/shared.module';
import {ContainerComponent} from '../shared/components/container/container.component';

@NgModule({
  declarations: [PolygonComponent, PolygonRowComponent],
  imports: [
    CommonModule,
    PolygonRoutingModule,
    SharedModule
  ],
  providers: [PolygonMapReduceService, PolygonReadService],
  bootstrap: [PolygonComponent],
  entryComponents: [ContainerComponent]
})
export class PolygonModule { }
