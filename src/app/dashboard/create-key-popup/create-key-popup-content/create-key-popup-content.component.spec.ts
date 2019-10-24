import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateKeyPopupContentComponent } from './create-key-popup-content.component';

describe('CreateKeyPopupContentComponent', () => {
  let component: CreateKeyPopupContentComponent;
  let fixture: ComponentFixture<CreateKeyPopupContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateKeyPopupContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateKeyPopupContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
