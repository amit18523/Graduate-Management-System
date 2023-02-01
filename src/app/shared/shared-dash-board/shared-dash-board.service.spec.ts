import { TestBed } from '@angular/core/testing';

import { SharedDashBoardService } from './shared-dash-board.service';

describe('SharedDashBoardService', () => {
  let service: SharedDashBoardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharedDashBoardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
