import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PolygonComponent } from './polygon/polygon.component';
import {PolygonRoutingModule} from './polygon.routing';

@NgModule({
  declarations: [PolygonComponent],
  imports: [
    CommonModule,
    PolygonRoutingModule
  ],
  bootstrap: [PolygonComponent]
})
export class PolygonModule { }
