import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ECategoryPage } from './e-category.page';

describe('ECategoryPage', () => {
  let component: ECategoryPage;
  let fixture: ComponentFixture<ECategoryPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ECategoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
