import { TestBed } from '@angular/core/testing';

import { ClientrequirementsService } from './clientrequirements.service';

describe('ClientrequirementsService', () => {
  let service: ClientrequirementsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientrequirementsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
