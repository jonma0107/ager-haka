import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriasCarrucelComponent } from './categorias-carrucel.component';

describe('CategoriasCarrucelComponent', () => {
  let component: CategoriasCarrucelComponent;
  let fixture: ComponentFixture<CategoriasCarrucelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoriasCarrucelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriasCarrucelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
