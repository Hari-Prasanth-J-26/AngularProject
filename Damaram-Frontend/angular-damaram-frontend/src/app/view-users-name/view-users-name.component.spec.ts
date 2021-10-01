import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { MainService } from '../main.service';

import { ViewUsersNameComponent } from './view-users-name.component';

describe('ViewUsersNameComponent', () => {
  let component: ViewUsersNameComponent;
  let fixture: ComponentFixture<ViewUsersNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewUsersNameComponent ],
      imports: [HttpClientModule, FormsModule, RouterTestingModule],
      providers: [MainService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewUsersNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
