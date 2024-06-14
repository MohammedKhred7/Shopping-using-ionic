import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CourceiraPage } from './courceira.page';

describe('CourceiraPage', () => {
  let component: CourceiraPage;
  let fixture: ComponentFixture<CourceiraPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CourceiraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
