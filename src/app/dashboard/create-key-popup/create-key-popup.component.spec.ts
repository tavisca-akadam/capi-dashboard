import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateKeyPopupComponent } from './create-key-popup.component';

describe('CreateKeyPopupComponent', () => {
  let component: CreateKeyPopupComponent;
  let fixture: ComponentFixture<CreateKeyPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateKeyPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateKeyPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
