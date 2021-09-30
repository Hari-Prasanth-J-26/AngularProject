import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewUsersContactComponent } from './view-users-contact.component';

describe('ViewUsersContactComponent', () => {
  let component: ViewUsersContactComponent;
  let fixture: ComponentFixture<ViewUsersContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewUsersContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewUsersContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
