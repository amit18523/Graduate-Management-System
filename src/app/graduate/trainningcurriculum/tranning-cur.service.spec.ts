import { TestBed } from '@angular/core/testing';

import { TranningCurService } from './tranning-cur.service';

describe('TranningCurService', () => {
  let service: TranningCurService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TranningCurService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
