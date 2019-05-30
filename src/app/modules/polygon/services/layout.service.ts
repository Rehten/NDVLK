import {Injectable} from '@angular/core';
import {VirtualPointerMetadata} from '../../../types/components/virtual-pointer.metadata';
import {Read} from '../../../types/services/read.type';
import {from, Observable, of} from 'rxjs';
import {TextComplex} from '../../shared/components/text/text.complex';
import {TextComponent} from '../../shared/components/text/text.component';
import {TextMetadata} from '../../shared/components/text/text.metadata';
import {VirtualPointerComplex} from '../../../types/components/virtual-pointer.complex';
import {ContainerComplex} from '../../shared/components/container/container.complex';
import {ContainerComponent} from '../../shared/components/container/container.component';
import {ContainerMetadata} from '../../shared/components/container/container.metadata';
import {UuidService} from '../../shared/services/uuid.service';

@Injectable({
  providedIn: 'root'
})
export class LayoutService implements Read<ContainerComplex> {

  constructor(private uuidService: UuidService) {
  }

  read(): Observable<ContainerComplex> {
    const childPointer1: string = this.uuidService.generate();
    const childPointer2: string = this.uuidService.generate();
    return of(
      new ContainerComplex(ContainerComponent, new ContainerMetadata(
        new ContainerComplex(ContainerComponent, new ContainerMetadata(new TextComplex(TextComponent, new TextMetadata('23')), childPointer1, null, 'root')),
        'root',
        childPointer1
      ))
    );
  }
}
