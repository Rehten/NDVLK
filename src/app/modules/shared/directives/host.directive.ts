import {Directive, ViewContainerRef} from '@angular/core';

// передает ссылку на контейнер для динамической отрисовки компонентов
@Directive({
  selector: '[ndvHost]'
})
export class HostDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
