import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrarReporteComponent } from './borrar-reporte.component';

describe('BorrarReporteComponent', () => {
  let component: BorrarReporteComponent;
  let fixture: ComponentFixture<BorrarReporteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BorrarReporteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BorrarReporteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
