import {Component} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from './app.state';
import {ComponentClass} from './types/components/component-class.component';
import {ComponentInstance} from '@angular/core/src/render3/interfaces/player';
import {ContainerComponent} from './modules/shared/components/container/container.component';
import {TextComponent} from './modules/shared/components/text/text.component';
import {ErrorComponent} from './modules/shared/components/error/error.component';
import {FormInputComponent} from './modules/shared/components/form-input/form-input.component';
import {ContainersListComponent} from './modules/shared/components/containers-list/containers-list.component';
import {VirtualComponent} from './types/components/virtual.component';
import {AppAddFactoriesAction} from './redux/actions/add-factories.action';
import {VirtualComplexFactory} from './types/components/virtual.complex-factory';
import {HeaderComponent} from './modules/shared/components/header/header.component';

@Component({
  selector: 'ndv-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private $components: ComponentClass<VirtualComponent>[] = [
    ContainerComponent,
    TextComponent,
    ErrorComponent,
    FormInputComponent,
    ContainersListComponent,
    HeaderComponent
  ];

  constructor(
    private store: Store<AppState>) {
    // загружает компоненты в хранилище для дальнейшего доступа контейнера с фабрикой к ним
    store.dispatch<AppAddFactoriesAction>(new AppAddFactoriesAction(this.$components));
  }
}
