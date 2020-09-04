import { TestBed } from '@angular/core/testing';

import { CartInMemoryService } from './cart-in-memory.service';

describe('CartInMemoryService', () => {
  let service: CartInMemoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartInMemoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
