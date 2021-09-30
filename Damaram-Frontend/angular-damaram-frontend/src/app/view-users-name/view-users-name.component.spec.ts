import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewUsersNameComponent } from './view-users-name.component';

describe('ViewUsersNameComponent', () => {
  let component: ViewUsersNameComponent;
  let fixture: ComponentFixture<ViewUsersNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewUsersNameComponent ]
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
