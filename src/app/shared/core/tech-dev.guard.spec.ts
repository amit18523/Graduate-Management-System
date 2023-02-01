import { TestBed } from '@angular/core/testing';

import { TechDevGuard } from './tech-dev.guard';

describe('TechDevGuard', () => {
  let guard: TechDevGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(TechDevGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
