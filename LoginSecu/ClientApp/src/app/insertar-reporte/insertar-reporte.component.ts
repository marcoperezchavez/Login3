/// <reference path="../../../models/alumnadognl.ts" />
/// <reference path="../../../models/inforeportesgnl.ts" />
import { Component, OnInit, ViewChild, AfterContentInit } from '@angular/core';
import { AlumnadoGnl } from "../../../Models/AlumnadoGnl";
import { SeleccionarComponent } from "../seleccionar/seleccionar.component";
import { InfoReportesGnl } from "../../../models/inforeportesgnl";

@Component({
  selector: 'app-insertar-reporte',
  templateUrl: './insertar-reporte.component.html',
  styleUrls: ['./insertar-reporte.component.css']
})
export class InsertarReporteComponent implements OnInit {

 


  //alumno: AlumnadoGnl;
  alumn = new AlumnadoGnl();
  reporte: InfoReportesGnl = null;
  public id: number;
  public idTest: number;

  alumno = {
    id: 2,
    status: "Suspendido",
    reportes: "Citatorio",
    nombre: "Maria",
    apellidoPaterno: "Miramontes",
    apellidoMaterno: "Cervantes"
  };

  constructor() {
    
  }

  ngOnInit() {
    this.reporte = new InfoReportesGnl();

    //let alumnotest = localStorage.getItem("alumnoLS");
    //this.alumno = JSON.parse(alumnotest);
    localStorage.clear();
    console.log(this.alumno);
    
  }

  IngresarReporte() {
    console.log(this.reporte);
  }

}
