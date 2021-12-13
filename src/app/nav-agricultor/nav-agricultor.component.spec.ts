import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavAgricultorComponent } from './nav-agricultor.component';

describe('NavAgricultorComponent', () => {
  let component: NavAgricultorComponent;
  let fixture: ComponentFixture<NavAgricultorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavAgricultorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavAgricultorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
