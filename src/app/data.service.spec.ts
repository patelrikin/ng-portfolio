import { TestBed } from '@angular/core/testing';

import { DataService } from './data.service';
import { HttpClient, HttpResponse } from '@angular/common/http';

describe('DataService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ HttpClient ]
  }));

  it('should be created', () => {
    const service: DataService = TestBed.get(DataService);
    expect(service).toBeTruthy();
  });
});
