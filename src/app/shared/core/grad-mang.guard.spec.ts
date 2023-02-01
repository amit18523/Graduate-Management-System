import { TestBed } from '@angular/core/testing';

import { GradMangGuard } from './grad-mang.guard';

describe('GradMangGuard', () => {
  let guard: GradMangGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(GradMangGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
