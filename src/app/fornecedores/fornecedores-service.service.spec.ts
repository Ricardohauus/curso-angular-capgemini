import { TestBed } from '@angular/core/testing';

import { FornecedoresServiceService } from './fornecedores-service.service';

describe('FornecedoresServiceService', () => {
  let service: FornecedoresServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FornecedoresServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
