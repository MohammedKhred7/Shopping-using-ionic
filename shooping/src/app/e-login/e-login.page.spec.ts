import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ELoginPage } from './e-login.page';

describe('ELoginPage', () => {
  let component: ELoginPage;
  let fixture: ComponentFixture<ELoginPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ELoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
