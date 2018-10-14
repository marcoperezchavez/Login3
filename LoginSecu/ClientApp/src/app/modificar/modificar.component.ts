import { Component, OnInit } from '@angular/core';
import { AlumnadoGnl } from "../../../Models/AlumnadoGnl";
import { AlumnoService } from "../alumno.service";

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.css']
})
export class ModificarComponent implements OnInit {
  alumno : AlumnadoGnl = null;

  constructor(private alumnoService : AlumnoService) { }

  ngOnInit() {
    this.alumno = new AlumnadoGnl();
    let alumnoInfoLocal = localStorage.getItem("alumnoInsertarReporte");
    this.alumno = JSON.parse(alumnoInfoLocal);
    this.alumno.gradoString = this.alumno.grado.toString();
    //this.alumno.manoString = this.alumno.mano.toString();
    console.log(this.alumno);
  }

  public async modificarAlumno(alum: AlumnadoGnl) {
    console.log("Entrar a modificar, los datos del alumno son:");
    console.log(alum);
    let response = await this.alumnoService.modificarAlumno(alum);
    return response;

  }

}
