import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrutasCarrucelComponent } from './frutas-carrucel.component';

describe('FrutasCarrucelComponent', () => {
  let component: FrutasCarrucelComponent;
  let fixture: ComponentFixture<FrutasCarrucelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrutasCarrucelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrutasCarrucelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
