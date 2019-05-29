import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from './components/container/container.component';
import { HostDirective } from './directives/host.directive';
import { TextComponent } from './components/text/text.component';
import { ErrorComponent } from './components/error/error.component';
import { FormInputComponent } from './components/form-input/form-input.component';
import { ContainersListComponent } from './components/containers-list/containers-list.component';

@NgModule({
  declarations: [ContainerComponent, HostDirective, TextComponent, ErrorComponent, FormInputComponent, ContainersListComponent],
  imports: [
    CommonModule
  ],
  entryComponents: [TextComponent, ErrorComponent],
  exports: [ContainerComponent, TextComponent]
})
export class SharedModule { }
