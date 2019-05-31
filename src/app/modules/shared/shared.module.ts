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
import { HeaderComponent } from './components/header/header.component';
import { HeaderTextComponent } from './components/header/header-text/header-text.component';
import { HeaderInputComponent } from './components/header/header-input/header-input.component';
import { HeaderButtonComponent } from './components/header/header-button/header-button.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SidebarAccordeonComponent } from './components/sidebar/sidebar-accordeon/sidebar-accordeon.component';
import { SidebarAccordeonItemComponent } from './components/sidebar/sidebar-accordeon/sidebar-accordeon-item/sidebar-accordeon-item.component';

@NgModule({
  declarations: [
    ContainerComponent,
    HostDirective,
    TextComponent,
    ErrorComponent,
    FormInputComponent,
    ContainersListComponent,
    HeaderComponent,
    HeaderTextComponent,
    HeaderInputComponent,
    HeaderButtonComponent,
    SidebarComponent,
    SidebarAccordeonComponent,
    SidebarAccordeonItemComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature('metaMap',  $metaMapReducer)
  ],
  providers: [UuidService],
  entryComponents: [
    ContainerComponent,
    TextComponent,
    ErrorComponent,
    FormInputComponent,
    ContainersListComponent,
    HeaderComponent
  ],
  exports: [
    ContainerComponent,
    TextComponent,
    ErrorComponent,
    FormInputComponent,
    ContainersListComponent,
    HeaderComponent,
    HeaderTextComponent,
    HeaderInputComponent,
    HeaderButtonComponent,
    SidebarComponent,
    SidebarAccordeonComponent,
    SidebarAccordeonItemComponent
  ]
})
export class SharedModule { }
