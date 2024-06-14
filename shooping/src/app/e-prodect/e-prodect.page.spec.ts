import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EProdectPage } from './e-prodect.page';

describe('EProdectPage', () => {
  let component: EProdectPage;
  let fixture: ComponentFixture<EProdectPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EProdectPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
