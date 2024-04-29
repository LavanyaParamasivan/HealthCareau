import { TestBed } from '@angular/core/testing';

import { HealthylivingService } from './healthyliving.service';

describe('HealthylivingService', () => {
  let service: HealthylivingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HealthylivingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
