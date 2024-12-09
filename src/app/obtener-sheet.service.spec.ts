import { TestBed } from '@angular/core/testing';

import { ObtenerSheetService } from './obtener-sheet.service';

describe('ObtenerSheetService', () => {
  let service: ObtenerSheetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ObtenerSheetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
