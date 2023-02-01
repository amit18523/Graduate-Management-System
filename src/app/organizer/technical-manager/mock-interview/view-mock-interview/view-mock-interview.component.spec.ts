import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMockInterviewComponent } from './view-mock-interview.component';

describe('ViewMockInterviewComponent', () => {
  let component: ViewMockInterviewComponent;
  let fixture: ComponentFixture<ViewMockInterviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewMockInterviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewMockInterviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
