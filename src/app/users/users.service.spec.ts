import { TestBed, inject } from '@angular/core/testing';

import { Users.ServiceService } from './users.service.service';

describe('Users.ServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Users.ServiceService]
    });
  });

  it('should be created', inject([Users.ServiceService], (service: Users.ServiceService) => {
    expect(service).toBeTruthy();
  }));
});
