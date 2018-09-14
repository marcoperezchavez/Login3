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
  }

}
