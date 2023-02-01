import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardHomeAlComponent } from './dashboard-home-al.component';

describe('DashboardHomeAlComponent', () => {
  let component: DashboardHomeAlComponent;
  let fixture: ComponentFixture<DashboardHomeAlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardHomeAlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardHomeAlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
