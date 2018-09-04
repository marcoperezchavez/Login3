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
  public listAlumno : AlumnadoGnl[];
  public isValidSearchId: boolean = false;
  public al: string;
  public idTempo: number;
  isValidSearchFilters : boolean;



  //@ViewChild(InsertarReporteComponent) insertarRComponent: InsertarReporteComponent;

  records = {}

  constructor(private alumnadoService: AlumnoService, private router: Router) {}

  public async ngOnInit() {
    this.alumno = new AlumnadoGnl();
    this.isValidSearchFilters = false;

  }

  public async buscar(): Promise<void> {

    this.isValidSearchId = false;
    this.isValidSearchFilters = false;
    this.alumno = await this.alumnadoService.getId(this.alumno.id);
    let myObj = this.alumno;
    localStorage.setItem("alumnoLS", JSON.stringify(myObj));
    //console.log(this.alumno);
    this.isValidSearchId = true;
  }

  //Funciona para obtener todos
  getAll() {
    var t = this.alumnadoService.getAll();
  }

  insertarReporte() {
    //alert(this.alumno.id);

    localStorage.setItem("idtest", this.alumno.id.toString());
    this.router.navigate(['insertar-reporte']);
  }
  getAllReports() {
    localStorage.setItem("idtest", this.alumno.id.toString());
    this.router.navigate(['all-reports']);
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


}

  

