import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EUsersPage } from './e-users.page';

describe('EUsersPage', () => {
  let component: EUsersPage;
  let fixture: ComponentFixture<EUsersPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EUsersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
