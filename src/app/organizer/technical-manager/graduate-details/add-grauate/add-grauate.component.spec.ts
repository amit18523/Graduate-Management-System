import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGrauateComponent } from './add-grauate.component';

describe('AddGrauateComponent', () => {
  let component: AddGrauateComponent;
  let fixture: ComponentFixture<AddGrauateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddGrauateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddGrauateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
