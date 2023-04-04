import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Pregunta5Page } from './pregunta5.page';

describe('Pregunta5Page', () => {
  let component: Pregunta5Page;
  let fixture: ComponentFixture<Pregunta5Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Pregunta5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
