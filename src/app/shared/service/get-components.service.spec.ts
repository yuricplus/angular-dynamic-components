import { TestBed } from '@angular/core/testing';

import { GetComponentsService } from './get-components.service';

describe('GetComponentsService', () => {
  let service: GetComponentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetComponentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
