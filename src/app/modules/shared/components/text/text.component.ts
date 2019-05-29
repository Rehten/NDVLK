import { Component, OnInit } from '@angular/core';
import {ComponentInstance} from '@angular/core/src/render3/interfaces/player';

@Component({
  selector: 'ndv-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss']
})
export class TextComponent implements OnInit, ComponentInstance {

  constructor() { }

  ngOnInit() {
  }

}
