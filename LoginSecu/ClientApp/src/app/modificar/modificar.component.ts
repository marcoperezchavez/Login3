import { Component, OnInit } from '@angular/core';
import { AlumnadoGnl } from "../../../Models/AlumnadoGnl";

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.css']
})
export class ModificarComponent implements OnInit {
  alumno : AlumnadoGnl = null;

  constructor() { }

  ngOnInit() {
    this.alumno = new AlumnadoGnl();
    let alumnoInfoLocal = localStorage.getItem("alumnoInsertarReporte");
    
    this.alumno = JSON.parse(alumnoInfoLocal);
    this.alumno.gradoString = this.alumno.grado.toString();
    this.alumno.manoString = this.alumno.mano.toString() == "Diestro"
      ? "Diestro"
      : this.alumno.mano.toString() == "Zurdo"
        ? "Zurdo"
        : this.alumno.mano.toString() == "Ambidiestro"
          ? "Ambidiestro"
      : "";
    //this.alumno.manoString = this.alumno.mano.toString();
    console.log(this.alumno);
  }

}
