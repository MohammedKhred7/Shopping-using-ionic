import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UpdateCategoryPage } from './update-category.page';

describe('UpdateCategoryPage', () => {
  let component: UpdateCategoryPage;
  let fixture: ComponentFixture<UpdateCategoryPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(UpdateCategoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
