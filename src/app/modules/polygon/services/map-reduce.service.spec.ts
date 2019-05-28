import { TestBed } from '@angular/core/testing';

import { MapReduceService } from './map-reduce.service';

describe('MapReduceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MapReduceService = TestBed.get(MapReduceService);
    expect(service).toBeTruthy();
  });
});
