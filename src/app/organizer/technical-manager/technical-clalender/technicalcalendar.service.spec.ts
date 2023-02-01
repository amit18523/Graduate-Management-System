import { TestBed } from '@angular/core/testing';

import { TechnicalcalendarService } from './technicalcalendar.service';

describe('TechnicalcalendarService', () => {
  let service: TechnicalcalendarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TechnicalcalendarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
