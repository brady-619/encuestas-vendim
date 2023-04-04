import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Pregunta4Page } from './pregunta4.page';

describe('Pregunta4Page', () => {
  let component: Pregunta4Page;
  let fixture: ComponentFixture<Pregunta4Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Pregunta4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
