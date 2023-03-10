import { TestBed } from '@angular/core/testing';

import { StringTransformService } from './string-transform.service';

describe('StringTransformService', () => {
  let service: StringTransformService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StringTransformService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
