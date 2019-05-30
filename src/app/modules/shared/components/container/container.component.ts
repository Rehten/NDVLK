import {
  AfterViewInit,
  Component,
  ComponentFactory,
  ComponentFactoryResolver, Input, OnChanges,
  OnInit, SimpleChanges,
  Type,
  ViewChild
} from '@angular/core';
import {HostDirective} from '../../directives/host.directive';
import {VirtualComponent} from '../../../../types/components/virtual.component';
import {ContainerMetadata} from './container.metadata';
import {VirtualComplexFactory} from '../../../../types/components/virtual.complex-factory';
import {ContainerComplex} from './container.complex';
import {BehaviorSubject} from 'rxjs';
import {Store} from '@ngrx/store';
import {AppAddAction} from '../../../../redux/actions/add.action';
import {VirtualPointerComplexFactory} from '../../../../types/components/virtual-pointer.complex-factory';
import {VirtualPointerComplex} from '../../../../types/components/virtual-pointer.complex';
import {ErrorComplex} from '../error/error.complex';
import {ErrorComponent} from '../error/error.component';
import {ErrorMetadata} from '../error/error.metadata';
import {VirtualComplex} from '../../../../types/components/virtual.complex';

@Component({
  selector: 'ndv-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit, AfterViewInit, OnChanges, VirtualComponent {
  public static identifier: string = 'ndv-container';
  public static complexFactory: VirtualPointerComplexFactory = new class implements VirtualPointerComplexFactory {
    create(metaData: ContainerMetadata): ContainerComplex {
      return new ContainerComplex(ContainerComponent, metaData);
    }
  }();

  @Input()
  public metadata: ContainerMetadata = new ContainerMetadata();

  @ViewChild(HostDirective)
  private $containerHost: HostDirective;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private store: Store<Map<string, VirtualComplexFactory>>
  ) {
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    if (this.metadata && this.metadata.inner) {
      setTimeout(() => {
        this.redraw();
      });
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.metadata && this.metadata.inner) {
      this.redraw();
    }
  }

  redraw(): void {
    // возможны частые обновления и тормоза - скорее всего потребуется рефакторинг
    this.store.select('metaMap').subscribe((memoryMap: Map<string, VirtualPointerComplex>) => {
      if (!memoryMap.has(this.metadata.$pointer)) {
        this.store.dispatch<AppAddAction>(new AppAddAction(ContainerComponent.complexFactory.create(this.metadata)));
      }
      this.resolve();
    });
  }


  loadComponent(componentType: Type<VirtualComponent>): void {
    const factory: ComponentFactory<VirtualComponent> = this.componentFactoryResolver.resolveComponentFactory(componentType);

    this.$containerHost.viewContainerRef.clear();
    // создание кастомного компонента на основании метаданных плюс вставка метаданных внутрь только что созданного компонента
    const component = this.$containerHost.viewContainerRef.createComponent(factory).instance;
    component.metadata = this.metadata.inner.metadata;
  }

  resolve(): void {
    this.loadComponent(this.metadata.inner.componentClass);
  }
}
