import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from './components/container/container.component';
import { HostDirective } from './directives/host.directive';

@NgModule({
  declarations: [ContainerComponent, HostDirective],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
