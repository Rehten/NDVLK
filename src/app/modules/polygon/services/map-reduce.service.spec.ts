import { TestBed } from '@angular/core/testing';

import { PolygonMapReduceService } from './map-reduce.service';

describe('MapReduceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PolygonMapReduceService = TestBed.get(PolygonMapReduceService);
    expect(service).toBeTruthy();
  });
});
