import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StdPage } from './std.page';

describe('StdPage', () => {
  let component: StdPage;
  let fixture: ComponentFixture<StdPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(StdPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
