import { TestBed } from '@angular/core/testing';

import { ObtenerDatosServiceService } from './obtener-datos-service.service';

describe('ObtenerDatosServiceService', () => {
  let service: ObtenerDatosServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ObtenerDatosServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
