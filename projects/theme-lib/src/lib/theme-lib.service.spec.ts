import { TestBed } from '@angular/core/testing';

import { ThemeLibService } from './theme-lib.service';

describe('ThemeLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ThemeLibService = TestBed.get(ThemeLibService);
    expect(service).toBeTruthy();
  });
});
