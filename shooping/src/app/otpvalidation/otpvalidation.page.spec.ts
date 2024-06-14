import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OtpvalidationPage } from './otpvalidation.page';

describe('OtpvalidationPage', () => {
  let component: OtpvalidationPage;
  let fixture: ComponentFixture<OtpvalidationPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(OtpvalidationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
