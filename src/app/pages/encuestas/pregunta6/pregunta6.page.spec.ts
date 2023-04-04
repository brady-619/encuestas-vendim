import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Pregunta6Page } from './pregunta6.page';

describe('Pregunta6Page', () => {
  let component: Pregunta6Page;
  let fixture: ComponentFixture<Pregunta6Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Pregunta6Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
