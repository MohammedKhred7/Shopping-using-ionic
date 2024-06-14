import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChildernPage } from './childern.page';

describe('ChildernPage', () => {
  let component: ChildernPage;
  let fixture: ComponentFixture<ChildernPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ChildernPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
