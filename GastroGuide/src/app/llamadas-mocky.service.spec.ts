import { TestBed, inject } from '@angular/core/testing';

import { LlamadasMockyService } from './llamadas-mocky.service';

describe('LlamadasMockyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LlamadasMockyService]
    });
  });

  it('should be created', inject([LlamadasMockyService], (service: LlamadasMockyService) => {
    expect(service).toBeTruthy();
  }));
});
