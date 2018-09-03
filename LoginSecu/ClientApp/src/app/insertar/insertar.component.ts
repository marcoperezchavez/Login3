import { Component, OnInit } from '@angular/core';
import { AlumnoService } from "../alumno.service";
import { AlumnadoGnl } from "../../../Models/AlumnadoGnl";

@Component({
  selector: 'app-insertar',
  templateUrl: './insertar.component.html',
  styleUrls: ['./insertar.component.css']
})
export class InsertarComponent implements OnInit {

  constructor(private alumnoService : AlumnoService) { }
  alumno : AlumnadoGnl;
  ngOnInit() {
    this.alumno = new AlumnadoGnl();
  }

  public async  insertarAlumno(): Promise<void> {
    console.log(this.alumno);
    var response = await this.alumnoService.postAlumno(this.alumno);
    console.log("la respuesta es: " + response);

  }
  


}
