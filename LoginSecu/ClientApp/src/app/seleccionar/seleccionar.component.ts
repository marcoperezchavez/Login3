import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AlumnoService } from "../alumno.service";
import { AlumnadoGnl } from "../../../Models/AlumnadoGnl";

//import { InsertarReporteComponent } from "../insertar-reporte/insertar-reporte.component";


@Component({
  selector: 'app-seleccionar',
  templateUrl: './seleccionar.component.html',
  styleUrls: ['./seleccionar.component.css']
})
export class SeleccionarComponent implements OnInit {
  public alumno: AlumnadoGnl = null;
  public listAlumno: AlumnadoGnl[];
  public isValidSearchId: boolean = false;
  public al: string;
  public idTempo: number;
  isValidSearchFilters: boolean;
  public isGetAll:boolean;


  //@ViewChild(InsertarReporteComponent) insertarRComponent: InsertarReporteComponent;

  records = {}

  constructor(private alumnadoService: AlumnoService, private router: Router) {}

  public async ngOnInit() {
    this.alumno = new AlumnadoGnl();
    this.isValidSearchFilters = false;
    localStorage.clear();


  }

  public async buscar(): Promise<void> {

    this.isValidSearchId = false;
    this.isValidSearchFilters = false;
    let response = await this.alumnadoService.getId(this.alumno.id);
    this.listAlumno = response;
   
    this.isValidSearchId = true;
  }

  //Funciona para obtener todos
  getAll() {
    var t = this.alumnadoService.getAll();
  }

  InsertarNewReport(al: AlumnadoGnl) {
    //alert(this.alumno.id);

    localStorage.setItem("alumnoInsertarReporte", JSON.stringify(al));
    this.router.navigate(['insertar-reporte']);
  }


  public async getAllStudents() {
    this.isValidSearchId = false;
    this.isValidSearchFilters = false;
    console.log("Ingresaste a getAllStudents");
    var response = await this.alumnadoService.getAllStudents();
    this.isValidSearchFilters = true;
    //console.log(response);
    this.listAlumno = response; 
    console.log("test");
    console.log(this.listAlumno);


  }

  public async selectModificarReporte(al: AlumnadoGnl) {
  
    localStorage.clear();
    localStorage.setItem("alumnoInsertarReporte", JSON.stringify(al));
    console.log("Boton modificar Alumno");
    console.log(al);
    this.router.navigate(['modificar']);
  }

  public async  historialReportes(al: AlumnadoGnl) {
    this.isGetAll = true;
    localStorage.setItem("alumnoInsertarReporte", JSON.stringify(al));
    localStorage.setItem("IdGetAllInfoReportAlumno", JSON.stringify(this.isGetAll));
    this.router.navigate(['insertar-reporte']);
  }
  public async selectEliminarAlumno(id: number) {
    var response = this.alumnadoService.deleteAlumno(id);

  }
}

  

