import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedDashBoardComponent } from './shared-dash-board.component';

describe('SharedDashBoardComponent', () => {
  let component: SharedDashBoardComponent;
  let fixture: ComponentFixture<SharedDashBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SharedDashBoardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SharedDashBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
