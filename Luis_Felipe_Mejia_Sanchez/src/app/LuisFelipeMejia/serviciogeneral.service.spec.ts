import { TestBed } from '@angular/core/testing';

import { ServiciogeneralService } from './serviciogeneral.service';

describe('ServiciogeneralService', () => {
  let service: ServiciogeneralService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiciogeneralService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
