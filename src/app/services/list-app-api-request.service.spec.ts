import { TestBed } from '@angular/core/testing';

import { ListAppApiRequestService } from './list-app-api-request.service';

describe('ListAppApiRequestService', () => {
  let service: ListAppApiRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListAppApiRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
