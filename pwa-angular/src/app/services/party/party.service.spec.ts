import { TestBed } from '@angular/core/testing';

import { PartyService } from './party.service';

describe('CandidateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PartyService = TestBed.get(PartyService);
    expect(service).toBeTruthy();
  });
});
