import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddProdectPage } from './add-prodect.page';

describe('AddProdectPage', () => {
  let component: AddProdectPage;
  let fixture: ComponentFixture<AddProdectPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AddProdectPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
