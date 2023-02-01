import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddblockedComponent } from './addblocked.component';

describe('AddblockedComponent', () => {
  let component: AddblockedComponent;
  let fixture: ComponentFixture<AddblockedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddblockedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddblockedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
