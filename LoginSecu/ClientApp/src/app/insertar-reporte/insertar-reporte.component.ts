
import { Component, OnInit, ViewChild, AfterContentInit } from '@angular/core';
import { AlumnadoGnl } from "../../../Models/AlumnadoGnl";
import { SeleccionarComponent } from "../seleccionar/seleccionar.component";
import { InfoReportesGnl } from "../../../models/inforeportesgnl";
import { Router } from '@angular/router';
import { ReporteService } from "../reporte.service"
import { AlumnoService } from "../alumno.service";


@Component({
  selector: 'app-insertar-reporte',
  templateUrl: './insertar-reporte.component.html',
  styleUrls: ['./insertar-reporte.component.css']
})
export class InsertarReporteComponent implements OnInit {
  alumno: AlumnadoGnl;
  alumn = new AlumnadoGnl();
  reporte: InfoReportesGnl = null;
  public id: number;
  public idTest: number;
  public isGetAllReports:false;


  //alumno = {
  //  id: 2,
  //  status: "Suspendido",
  //  reportes: "Citatorio",
  //  nombre: "Maria",
  //  apellidoPaterno: "Miramontes",
  //  apellidoMaterno: "Cervantes"
  //};

  constructor(private alumnadoService: AlumnoService, private router: Router) {}

  ngOnInit() {
    this.reporte = new InfoReportesGnl();
    this.alumno = new AlumnadoGnl();

    let alumnoInfoLocal = localStorage.getItem("alumnoInsertarReporte");
    this.alumno = JSON.parse(alumnoInfoLocal);
    var resultIsAll = localStorage.getItem("IdGetAllInfoReportAlumno");
    this.isGetAllReports = JSON.parse(resultIsAll);

  }

  public async IngresarReporte(): Promise<void> {
    console.log(this.reporte);
    this.reporte.IdAlumno = this.alumno.id;
    var response = await this.alumnadoService.postReport(this.reporte);
    console.log(this.reporte);

  }

  selectInsertar() {
    console.log(this.router.navigate(['Menu']));
  }

  selectEliminar() {
    this.router.navigate(['Menu']);
  }

  selectModificar() {
    this.router.navigate(['Menu']);
  }

  selectSeleccionar() {
    this.router.navigate(['Menu']);
  }

  selectSeleccionarReporte() {
    this.router.navigate(['insertar-reporte']);
  }

  selectInsertarReporte() {
    this.router.navigate(['insertar-reporte']);
  }

  selectEliminarReporte() {
    this.router.navigate(['insertar-reporte']);
  }

  selectModificarReporte() {
    this.router.navigate(['insertar-reporte']);
  }


}
