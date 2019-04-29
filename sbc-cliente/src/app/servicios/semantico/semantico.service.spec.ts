import { TestBed } from '@angular/core/testing';

import { SemanticoService } from './semantico.service';

describe('SemanticoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SemanticoService = TestBed.get(SemanticoService);
    expect(service).toBeTruthy();
  });
});
