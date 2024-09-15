import { TestBed } from '@angular/core/testing';

import { CyrptoService } from './cyrpto.service';

describe('CyrptoService', () => {
  let service: CyrptoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CyrptoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
