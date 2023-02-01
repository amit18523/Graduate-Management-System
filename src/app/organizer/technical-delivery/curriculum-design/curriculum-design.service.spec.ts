import { TestBed } from '@angular/core/testing';

import { CurriculumDesignService } from './curriculum-design.service';

describe('CurriculumDesignService', () => {
  let service: CurriculumDesignService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CurriculumDesignService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
