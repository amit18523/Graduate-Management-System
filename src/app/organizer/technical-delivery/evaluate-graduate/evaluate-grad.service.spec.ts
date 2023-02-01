import { TestBed } from '@angular/core/testing';

import { EvaluateGradService } from './evaluate-grad.service';

describe('EvaluateGradService', () => {
  let service: EvaluateGradService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EvaluateGradService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
