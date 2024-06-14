import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HelloPage } from './hello.page';

describe('HelloPage', () => {
  let component: HelloPage;
  let fixture: ComponentFixture<HelloPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HelloPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
