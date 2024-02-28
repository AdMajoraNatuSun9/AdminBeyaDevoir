import { TestBed } from '@angular/core/testing';

import { EmploisdutempsService } from './emploisdutemps.service';

describe('EmploisdutempsService', () => {
  let service: EmploisdutempsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmploisdutempsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
