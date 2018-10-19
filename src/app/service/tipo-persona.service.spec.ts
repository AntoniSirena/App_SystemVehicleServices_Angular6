import { TestBed } from '@angular/core/testing';

import { TipoPersonaService } from './tipo-persona.service';

describe('TipoPersonaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TipoPersonaService = TestBed.get(TipoPersonaService);
    expect(service).toBeTruthy();
  });
});
