import { TestBed } from '@angular/core/testing';

import { TrainerAssignService } from './trainer-assign.service';

describe('TrainerAssignService', () => {
  let service: TrainerAssignService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrainerAssignService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
