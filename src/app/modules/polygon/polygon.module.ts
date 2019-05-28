import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PolygonComponent } from './components/polygon/polygon.component';
import {PolygonRoutingModule} from './polygon.routing';
import {PolygonMapReduceService} from './services/map-reduce.service';

@NgModule({
  declarations: [PolygonComponent],
  imports: [
    CommonModule,
    PolygonRoutingModule
  ],
  providers: [PolygonMapReduceService],
  bootstrap: [PolygonComponent]
})
export class PolygonModule { }
