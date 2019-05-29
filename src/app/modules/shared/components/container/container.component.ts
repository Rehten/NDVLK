import {
  AfterViewInit,
  Component,
  ComponentFactory,
  ComponentFactoryResolver,
  OnInit,
  Type,
  ViewChild
} from '@angular/core';
import {HostDirective} from '../../directives/host.directive';
import {TextComponent} from '../text/text.component';
import {ComponentInstance} from '@angular/core/src/render3/interfaces/player';
import {VirtualComponent} from '../../../../types/components/virtual.component';
import {ContainerMetadata} from './container.metadata';
import {VirtualMetadata} from '../../../../types/components/virtual.metadata';
import {ComponentClass} from '../../../../types/components/static-factory.component';

// короткие названия для типов
type ContainerComponentAlias = ContainerComponent<VirtualComponent<VirtualMetadata>, VirtualMetadata>;
type ContainerMetadataAlias = ContainerMetadata<VirtualComponent<VirtualMetadata>, VirtualMetadata>;

@Component({
  selector: 'ndv-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent<T extends VirtualComponent<R>, R extends VirtualMetadata>
  implements OnInit, AfterViewInit, VirtualComponent<ContainerMetadata<T, R>> {
  static complexFactory: ComponentClass<ContainerComponentAlias, ContainerMetadataAlias>;

  public metadata: ContainerMetadata<T, R> = new ContainerMetadata<T, R>();

  @ViewChild(HostDirective)
  private $containerHost: HostDirective;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.resolve(this.metadata);
  }

  // todo: отрефачить
  loadComponent(componentType: Type<T>): void {
    const factory: ComponentFactory<T> = this.componentFactoryResolver.resolveComponentFactory(componentType);

    this.$containerHost.viewContainerRef.clear();
    this.$containerHost.viewContainerRef.createComponent(factory);
  }

  resolve(metadata: ContainerMetadata<T, R>): void {
    this.loadComponent(this.metadata.inner.componentClass);
  }

}
