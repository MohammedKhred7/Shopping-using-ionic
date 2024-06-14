import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OwmenPage } from './owmen.page';

describe('OwmenPage', () => {
  let component: OwmenPage;
  let fixture: ComponentFixture<OwmenPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(OwmenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
