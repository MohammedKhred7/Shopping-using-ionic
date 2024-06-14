import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ZeroPage } from './zero.page';

describe('ZeroPage', () => {
  let component: ZeroPage;
  let fixture: ComponentFixture<ZeroPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ZeroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
