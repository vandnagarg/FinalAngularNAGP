import { TestBed } from '@angular/core/testing';

import { ProductsInMemoryService } from './products-in-memory.service';

describe('ProductsInMemoryService', () => {
  let service: ProductsInMemoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductsInMemoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
