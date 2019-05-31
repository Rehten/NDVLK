import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarAccordeonItemComponent } from './sidebar-accordeon-item.component';

describe('SidebarAccordeonItemComponent', () => {
  let component: SidebarAccordeonItemComponent;
  let fixture: ComponentFixture<SidebarAccordeonItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarAccordeonItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarAccordeonItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
