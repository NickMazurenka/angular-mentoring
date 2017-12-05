import { TestBed, inject } from '@angular/core/testing';

import { ConfirmationDialogServiceService } from './confirmation-dialog-service.service';

describe('ConfirmationDialogServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConfirmationDialogServiceService]
    });
  });

  it('should be created', inject([ConfirmationDialogServiceService], (service: ConfirmationDialogServiceService) => {
    expect(service).toBeTruthy();
  }));
});
