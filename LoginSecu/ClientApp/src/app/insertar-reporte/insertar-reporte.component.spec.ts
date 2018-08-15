import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertarReporteComponent } from './insertar-reporte.component';

describe('InsertarReporteComponent', () => {
  let component: InsertarReporteComponent;
  let fixture: ComponentFixture<InsertarReporteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertarReporteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertarReporteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
