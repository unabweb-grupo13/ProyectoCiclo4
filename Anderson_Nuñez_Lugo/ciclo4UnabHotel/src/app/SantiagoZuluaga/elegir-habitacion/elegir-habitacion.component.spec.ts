import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElegirHabitacionComponent } from './elegir-habitacion.component';

describe('ElegirHabitacionComponent', () => {
  let component: ElegirHabitacionComponent;
  let fixture: ComponentFixture<ElegirHabitacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElegirHabitacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElegirHabitacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
