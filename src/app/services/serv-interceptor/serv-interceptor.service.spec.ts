import { TestBed } from '@angular/core/testing';

import { ServInterceptorService } from './serv-interceptor.service';

describe('ServInterceptorLoadingService', () => {
  let service: ServInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
