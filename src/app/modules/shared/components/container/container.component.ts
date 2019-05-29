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
import {ComponentClass} from '../../../../types/components/component-class.component';
import {ContainerComplexFactory} from './container.complex-factory';
import {ErrorComplex} from '../error/error.complex';
import {ErrorComponent} from '../error/error.component';

@Component({
  selector: 'ndv-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent
  implements OnInit, AfterViewInit, VirtualComponent {
  static complexFactory: ContainerComplexFactory;

  public metadata: ContainerMetadata = new ContainerMetadata();

  @ViewChild(HostDirective)
  private $containerHost: HostDirective;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.resolve(this.metadata);
    });
  }

  // todo: отрефачить
  loadComponent(componentType: Type<VirtualComponent>): void {
    const factory: ComponentFactory<VirtualComponent> = this.componentFactoryResolver.resolveComponentFactory(componentType);

    this.$containerHost.viewContainerRef.clear();
    this.$containerHost.viewContainerRef.createComponent(factory);
  }

  resolve(metadata: ContainerMetadata): void {
    this.loadComponent(this.metadata.inner.componentClass);
  }

}
