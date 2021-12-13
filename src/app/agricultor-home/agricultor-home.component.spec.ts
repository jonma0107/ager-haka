import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgricultorHomeComponent } from './agricultor-home.component';

describe('AgricultorHomeComponent', () => {
  let component: AgricultorHomeComponent;
  let fixture: ComponentFixture<AgricultorHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgricultorHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgricultorHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
