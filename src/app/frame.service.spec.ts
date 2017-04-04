/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FrameService } from './frame.service';

describe('FrameService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FrameService]
    });
  });

  it('should ...', inject([FrameService], (service: FrameService) => {
    expect(service).toBeTruthy();
  }));
});
