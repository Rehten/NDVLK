import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app.routing';
import {StoreModule} from '@ngrx/store';
import {$metaMapReducer} from './redux/reducers/meta-map.reducer';
import {SharedModule} from './modules/shared/shared.module';
import {ContainerComponent} from './modules/shared/components/container/container.component';
import {TextComponent} from './modules/shared/components/text/text.component';
import {ErrorComponent} from './modules/shared/components/error/error.component';
import {FormInputComponent} from './modules/shared/components/form-input/form-input.component';
import {ContainersListComponent} from './modules/shared/components/containers-list/containers-list.component';
import {UuidService} from './modules/shared/services/uuid.service';
import {$factoriesReducer} from './redux/reducers/factories.reducer';
import {HeaderComponent} from './modules/shared/components/header/header.component';
import {HeaderButtonComponent} from './modules/shared/components/header/header-button/header-button.component';
import {HeaderInputComponent} from './modules/shared/components/header/header-input/header-input.component';
import {HeaderTextComponent} from './modules/shared/components/header/header-text/header-text.component';
import {SidebarComponent} from './modules/shared/components/sidebar/sidebar.component';
import {SidebarAccordeonComponent} from './modules/shared/components/sidebar/sidebar-accordeon/sidebar-accordeon.component';
import {SidebarAccordeonItemComponent} from './modules/shared/components/sidebar/sidebar-accordeon/sidebar-accordeon-item/sidebar-accordeon-item.component';
import {FormSelectComponent} from './modules/shared/components/form-select/form-select.component';
import {CommonTableComponent} from './modules/shared/components/common-table/common-table.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    StoreModule.forRoot({metaMap: $metaMapReducer, factories: $factoriesReducer}),
    AppRoutingModule,
    SharedModule
  ],
  providers: [UuidService],
  bootstrap: [AppComponent],
  entryComponents: [
    ContainerComponent,
    TextComponent,
    ErrorComponent,
    FormInputComponent,
    FormSelectComponent,
    ContainersListComponent,
    HeaderComponent,
    HeaderButtonComponent,
    HeaderInputComponent,
    HeaderTextComponent,
    SidebarComponent,
    SidebarAccordeonComponent,
    SidebarAccordeonItemComponent,
    CommonTableComponent
  ]
})
export class AppModule {
}
