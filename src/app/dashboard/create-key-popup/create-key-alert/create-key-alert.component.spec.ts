import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateKeyAlertComponent } from './create-key-alert.component';

describe('CreateKeyAlertComponent', () => {
  let component: CreateKeyAlertComponent;
  let fixture: ComponentFixture<CreateKeyAlertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateKeyAlertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateKeyAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
