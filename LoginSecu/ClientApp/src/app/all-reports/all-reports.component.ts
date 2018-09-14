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

  public async ngOnInit() {
    this.alumno = new AlumnadoGnl();
    this.reporte = new InfoReportesGnl();
    let alumnoInfoLocal = localStorage.getItem("alumnoInsertarReporte");
    this.alumno = JSON.parse(alumnoInfoLocal);
    let response = await this.alumnadoService.getAllReportsById(this.alumno.id);
    this.reporte = response;
    console.log("Info del reporte");
    console.log(this.reporte);

  }
  public async eliminarReports(id: number): Promise<void> {
    let response = await this.alumnadoService.deleteReport(id);
    console.log("resultado del delete");
    console.log(response);
  }

}
