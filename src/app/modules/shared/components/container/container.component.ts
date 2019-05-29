import {
  AfterViewInit,
  Component,
  ComponentFactory,
  ComponentFactoryResolver, Input, OnChanges,
  OnInit,
  Type,
  ViewChild
} from '@angular/core';
import {HostDirective} from '../../directives/host.directive';
import {VirtualComponent} from '../../../../types/components/virtual.component';
import {ContainerMetadata} from './container.metadata';
import {VirtualComplexFactory} from '../../../../types/components/virtual.complex-factory';
import {ContainerComplex} from './container.complex';

@Component({
  selector: 'ndv-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit, AfterViewInit, OnChanges, VirtualComponent {
  public static complexFactory: VirtualComplexFactory = new class implements VirtualComplexFactory {
    create(metaData: ContainerMetadata): ContainerComplex {
      return new ContainerComplex(ContainerComponent, metaData);
    }
  }();

  @Input()
  public metadata: ContainerMetadata = new ContainerMetadata();

  @ViewChild(HostDirective)
  private $containerHost: HostDirective;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    if (this.metadata) {
      setTimeout(() => {
        this.resolve();
      });
    }
  }

  ngOnChanges(): void {
    if (this.metadata) {
      this.resolve();
    }
  }

  loadComponent(componentType: Type<VirtualComponent>): void {
    const factory: ComponentFactory<VirtualComponent> = this.componentFactoryResolver.resolveComponentFactory(componentType);

    this.$containerHost.viewContainerRef.clear();
    // создание кастомного компонента на основании метаданных плюс вставка метаданных внутрь только что созданного компонента
    this.$containerHost.viewContainerRef.createComponent(factory).instance.metadata = this.metadata.inner.metadata;
  }

  resolve(): void {
    this.loadComponent(this.metadata.inner.componentClass);
  }

}
