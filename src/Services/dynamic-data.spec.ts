import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

import { DynamicData } from './dynamic-data';

describe('DynamicData', () => {
  let service: DynamicData;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()],
    });
    service = TestBed.inject(DynamicData);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
