import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewUsersEmailComponent } from './view-users-email.component';

describe('ViewUsersEmailComponent', () => {
  let component: ViewUsersEmailComponent;
  let fixture: ComponentFixture<ViewUsersEmailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewUsersEmailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewUsersEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
