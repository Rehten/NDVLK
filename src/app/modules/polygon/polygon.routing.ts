import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {PolygonComponent} from './polygon/polygon.component';

const routes: Routes = [
  {
    path: '',
    component: PolygonComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PolygonRoutingModule { }
