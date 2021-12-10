import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarReservasComponent } from './registrar-reservas.component';

describe('RegistrarReservasComponent', () => {
  let component: RegistrarReservasComponent;
  let fixture: ComponentFixture<RegistrarReservasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarReservasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarReservasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
