import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from './components/container/container.component';
import { HostDirective } from './directives/host.directive';
import { TextComponent } from './components/text/text.component';
import { ErrorComponent } from './components/error/error.component';

@NgModule({
  declarations: [ContainerComponent, HostDirective, TextComponent, ErrorComponent],
  imports: [
    CommonModule
  ],
  entryComponents: [TextComponent],
  exports: [ContainerComponent, TextComponent]
})
export class SharedModule { }
