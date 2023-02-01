import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCirriculumapprovalleadComponent } from './view-cirriculumapprovallead.component';

describe('ViewCirriculumapprovalleadComponent', () => {
  let component: ViewCirriculumapprovalleadComponent;
  let fixture: ComponentFixture<ViewCirriculumapprovalleadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewCirriculumapprovalleadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewCirriculumapprovalleadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
