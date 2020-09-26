import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetEmailPhoneComponent } from './get-email-phone.component';

describe('GetEmailPhoneComponent', () => {
  let component: GetEmailPhoneComponent;
  let fixture: ComponentFixture<GetEmailPhoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetEmailPhoneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetEmailPhoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
