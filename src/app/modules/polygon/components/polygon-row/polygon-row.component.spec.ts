import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PolygonRowComponent } from './polygon-row.component';

describe('PolygonRowComponent', () => {
  let component: PolygonRowComponent;
  let fixture: ComponentFixture<PolygonRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PolygonRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PolygonRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
