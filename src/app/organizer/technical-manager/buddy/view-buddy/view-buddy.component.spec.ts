import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewBuddyComponent } from './view-buddy.component';

describe('ViewBuddyComponent', () => {
  let component: ViewBuddyComponent;
  let fixture: ComponentFixture<ViewBuddyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewBuddyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewBuddyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
