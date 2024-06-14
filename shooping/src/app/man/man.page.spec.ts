import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ManPage } from './man.page';

describe('ManPage', () => {
  let component: ManPage;
  let fixture: ComponentFixture<ManPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ManPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
