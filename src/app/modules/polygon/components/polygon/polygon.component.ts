import { Component, OnInit } from '@angular/core';
import {PolygonReadService} from '../../services/polygon-read.service';
import {PolygonPartEntity} from './polygon.part-entity';
import {ErrorMetadata} from '../../../shared/components/error/error.metadata';
import {ContainerMetadata} from '../../../shared/components/container/container.metadata';

@Component({
  selector: 'ndv-polygon',
  templateUrl: './polygon.component.html',
  styleUrls: ['./polygon.component.scss']
})
export class PolygonComponent implements OnInit {
  private $containerMetaData: ContainerMetadata = new ContainerMetadata();

  constructor(private polygonReadService: PolygonReadService) {}

  ngOnInit() {
    this.polygonReadService.read().subscribe((entity: PolygonPartEntity): void => {
      console.log(entity);
    });
  }

}
