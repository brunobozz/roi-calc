import { TestBed } from '@angular/core/testing';

import { ServPriceApiService } from './serv-price-api.service';

describe('ServPriceApiService', () => {
  let service: ServPriceApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServPriceApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
