import { Component, OnInit } from '@angular/core';
import {ComponentInstance} from '@angular/core/src/render3/interfaces/player';
import {VirtualComplex} from '../../../../types/components/virtual.complex';
import {VirtualComponent} from '../../../../types/components/virtual.component';
import {VirtualComplexFactory} from '../../../../types/components/virtual.complex-factory';
import {ErrorMetadata} from '../error/error.metadata';
import {ErrorComplex} from '../error/error.complex';
import {TextMetadata} from './text.metadata';
import {TextComplex} from './text.complex';

@Component({
  selector: 'ndv-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss']
})
export class TextComponent implements OnInit, VirtualComponent {
  static complexFactory: VirtualComplexFactory = new class implements VirtualComplexFactory {
    create(metaData: TextMetadata): TextComplex {
      return new TextComplex(TextComponent, metaData);
    }
  };

  metadata: TextMetadata;

  constructor() { }

  ngOnInit() {
  }

}
