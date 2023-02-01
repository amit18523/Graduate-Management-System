import { TestBed } from '@angular/core/testing';

import { TechMangGuard } from './tech-mang.guard';

describe('TechMangGuard', () => {
  let guard: TechMangGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(TechMangGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
