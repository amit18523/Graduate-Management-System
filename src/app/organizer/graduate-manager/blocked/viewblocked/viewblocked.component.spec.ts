import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewblockedComponent } from './viewblocked.component';

describe('ViewblockedComponent', () => {
  let component: ViewblockedComponent;
  let fixture: ComponentFixture<ViewblockedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewblockedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewblockedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
