import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from './components/container/container.component';
import { HostDirective } from './directives/host.directive';
import { TextComponent } from './components/text/text.component';
import { ErrorComponent } from './components/error/error.component';
import { FormInputComponent } from './components/form-input/form-input.component';
import { ContainersListComponent } from './components/containers-list/containers-list.component';
import {UuidService} from './services/uuid.service';
import {StoreModule} from '@ngrx/store';
import {$metaMapReducer} from '../../redux/reducers/meta-map.reducer';
import {$factoriesReducer} from '../../redux/reducers/factories.reducer';

@NgModule({
  declarations: [ContainerComponent, HostDirective, TextComponent, ErrorComponent, FormInputComponent, ContainersListComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature('metaMap',  $metaMapReducer)
  ],
  providers: [UuidService],
  entryComponents: [ContainerComponent, TextComponent, ErrorComponent, FormInputComponent, ContainersListComponent],
  exports: [ContainerComponent, TextComponent, ErrorComponent, FormInputComponent, ContainersListComponent]
})
export class SharedModule { }
