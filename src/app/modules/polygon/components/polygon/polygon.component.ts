import { Component, OnInit } from '@angular/core';
import {PolygonReadService} from '../../services/polygon-read.service';
import {PolygonPartEntity} from './polygon.part-entity';

@Component({
  selector: 'ndv-polygon',
  templateUrl: './polygon.component.html',
  styleUrls: ['./polygon.component.scss']
})
export class PolygonComponent implements OnInit {

  constructor(private polygonReadService: PolygonReadService) {}

  ngOnInit() {
    this.polygonReadService.read().subscribe((entity: PolygonPartEntity): void => {
      console.log(entity);
    });
  }

}
