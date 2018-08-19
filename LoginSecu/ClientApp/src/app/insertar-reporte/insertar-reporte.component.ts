/// <reference path="../../../models/alumnadognl.ts" />
import { Component, OnInit, ViewChild, AfterContentInit } from '@angular/core';
import { AlumnadoGnl } from "../../../Models/AlumnadoGnl";
import { SeleccionarComponent } from "../seleccionar/seleccionar.component";


@Component({
  selector: 'app-insertar-reporte',
  templateUrl: './insertar-reporte.component.html',
  styleUrls: ['./insertar-reporte.component.css']
})
export class InsertarReporteComponent implements OnInit {

 


  //alumno: AlumnadoGnl;
  alumn = new AlumnadoGnl();
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


    //let alumnotest = localStorage.getItem("alumnoLS");
    //this.alumno = JSON.parse(alumnotest);
    localStorage.clear();
    console.log(this.alumno);
    
  }

}
