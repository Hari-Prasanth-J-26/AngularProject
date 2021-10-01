import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { MainService } from './main.service';

describe('MainService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule]
  }));

  it('should be created', () => {
    const service: MainService = TestBed.get(MainService);
    expect(service).toBeTruthy();
  });

});
