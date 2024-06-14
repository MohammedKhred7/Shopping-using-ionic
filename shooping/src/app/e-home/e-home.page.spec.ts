import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EHomePage } from './e-home.page';

describe('EHomePage', () => {
  let component: EHomePage;
  let fixture: ComponentFixture<EHomePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
