import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { MainService } from '../main.service';

import { SearchEmailComponent } from './search-email.component';

describe('SearchEmailComponent', () => {
  let component: SearchEmailComponent;
  let fixture: ComponentFixture<SearchEmailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchEmailComponent ],
      imports: [RouterTestingModule, HttpClientModule, FormsModule],
      providers: [MainService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
