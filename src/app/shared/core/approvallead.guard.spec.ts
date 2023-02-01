import { TestBed } from '@angular/core/testing';

import { ApprovalleadGuard } from './approvallead.guard';

describe('ApprovalleadGuard', () => {
  let guard: ApprovalleadGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ApprovalleadGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
