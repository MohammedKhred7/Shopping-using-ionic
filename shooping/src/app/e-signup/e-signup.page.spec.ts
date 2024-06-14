import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ESignupPage } from './e-signup.page';

describe('ESignupPage', () => {
  let component: ESignupPage;
  let fixture: ComponentFixture<ESignupPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ESignupPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
