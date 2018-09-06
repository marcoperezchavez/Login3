import { Component, OnInit } from '@angular/core';
import { AlumnoService } from "../alumno.service";
import { InfoReportesGnl } from "../../../models/inforeportesgnl";
import { AlumnadoGnl } from "../../../Models/AlumnadoGnl";

@Component({
  selector: 'all-reports',
  templateUrl: './all-reports.component.html',
  styleUrls: ['./all-reports.component.css']
})
export class AllReportsComponent implements OnInit {
  public isGetReport: boolean = true;
  reporte: InfoReportesGnl = null;
  alumno: AlumnadoGnl;


  constructor(private alumnadoService: AlumnoService) { }

  ngOnInit() {
    this.alumno = new AlumnadoGnl();
    let alumnoInfoLocal = localStorage.getItem("alumnoInsertarReporte");
    this.alumno = JSON.parse(alumnoInfoLocal);
    var response = this.alumnadoService.getAllReportsById(this.alumno.id);
    console.log("Info del reporte");
    console.log(response);
  }

}
