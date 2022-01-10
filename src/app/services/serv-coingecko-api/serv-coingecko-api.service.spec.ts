import { TestBed } from '@angular/core/testing';

import { ServCoingeckoApiService } from './serv-coingecko-api.service';

describe('ServCoingeckoApiService', () => {
  let service: ServCoingeckoApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServCoingeckoApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
