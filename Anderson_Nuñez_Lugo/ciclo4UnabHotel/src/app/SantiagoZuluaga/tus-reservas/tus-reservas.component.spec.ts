import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TusReservasComponent } from './tus-reservas.component';

describe('TusReservasComponent', () => {
  let component: TusReservasComponent;
  let fixture: ComponentFixture<TusReservasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TusReservasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TusReservasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
