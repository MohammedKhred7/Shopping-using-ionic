import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LevelPage } from './level.page';

describe('LevelPage', () => {
  let component: LevelPage;
  let fixture: ComponentFixture<LevelPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LevelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
