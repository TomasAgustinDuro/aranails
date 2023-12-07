import { TestBed } from '@angular/core/testing';

import { EliminarTurnoServiceService } from './eliminar-turno-service.service';

describe('EliminarTurnoServiceService', () => {
  let service: EliminarTurnoServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EliminarTurnoServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
