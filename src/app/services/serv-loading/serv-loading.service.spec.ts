import { TestBed } from '@angular/core/testing';

import { ServLoadingService } from './serv-loading.service';

describe('ServLoadingService', () => {
  let service: ServLoadingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServLoadingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
