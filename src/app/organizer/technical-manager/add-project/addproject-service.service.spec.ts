import { TestBed } from '@angular/core/testing';

import { AddprojectServiceService } from './addproject-service.service';

describe('AddprojectServiceService', () => {
  let service: AddprojectServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddprojectServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
