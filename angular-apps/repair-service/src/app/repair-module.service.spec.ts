import { TestBed } from '@angular/core/testing';

import { RepairModuleService } from './repair-module.service';

describe('RepairModuleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RepairModuleService = TestBed.get(RepairModuleService);
    expect(service).toBeTruthy();
  });
});
