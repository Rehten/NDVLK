import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarAccordeonComponent } from './sidebar-accordeon.component';

describe('SidebarAccordeonComponent', () => {
  let component: SidebarAccordeonComponent;
  let fixture: ComponentFixture<SidebarAccordeonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarAccordeonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarAccordeonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
