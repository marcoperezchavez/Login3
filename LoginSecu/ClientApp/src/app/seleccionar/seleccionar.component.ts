import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlumnoService } from "../alumno.service";




@Component({
  selector: 'app-seleccionar',
  templateUrl: './seleccionar.component.html',
  styleUrls: ['./seleccionar.component.css']
})
export class SeleccionarComponent implements OnInit {
  public alumno: AlumnadoGnl;
  public isValidSearchId: boolean = false;

  records = {}

  constructor(private alumnadoService : AlumnoService, private router : Router) { }

  public async ngOnInit() {
    
    this.alumno = new AlumnadoGnl();
  }

  async buscar() {
    alert(this.alumno.Id);
    this.alumno = await this.alumnadoService.getId(this.alumno.Id);
    console.log(this.alumno);
    this.isValidSearchId = true;
  }
  //Funciona
  getAll() {
    var t = this.alumnadoService.getAll();
  }

  insertarReporte() {
    this.router.navigate(['insertar-reporte']);
  }

  
}

export class  AlumnadoGnl {
  Id: number;
  Status: number;
  Reportes: number;
  Nombre: string;
  ApellidoPaterno: string;
  ApellidoMaterno: string;
  Grado: number;
  Grupo: number;
  FechaDeIngreso: Date;
  Taller: number;
  //Domicilio: number;
  //NombrePadreTutor: number;
}
