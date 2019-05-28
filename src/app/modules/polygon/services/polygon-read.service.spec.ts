import { TestBed } from '@angular/core/testing';

import { PolygonReadService } from './polygon-read.service';

describe('PolygonReadService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PolygonReadService = TestBed.get(PolygonReadService);
    expect(service).toBeTruthy();
  });
});
