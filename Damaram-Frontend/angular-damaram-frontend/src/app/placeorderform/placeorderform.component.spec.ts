import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { MainService } from '../main.service';

import { PlaceorderformComponent } from './placeorderform.component';

describe('PlaceorderformComponent', () => {
  let component: PlaceorderformComponent;
  let fixture: ComponentFixture<PlaceorderformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaceorderformComponent ],
      imports: [HttpClientModule, RouterTestingModule, FormsModule, ReactiveFormsModule],
      providers: [MainService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceorderformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
