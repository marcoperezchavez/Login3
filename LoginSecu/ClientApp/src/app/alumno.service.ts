/// <reference path="../../models/inforeportesgnl.ts" />
import { Injectable, Component } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { AlumnadoGnl } from "../../Models/AlumnadoGnl";
import { InfoReportesGnl } from "../../Models/InfoReportesGnl";

let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
let cpParams = new URLSearchParams();
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

//let options = new RequestOptions({ headers: cpHeaders });
@Injectable({
  providedIn: 'root'
})
export class AlumnoService {
  private Alumnado: AlumnadoGnl;
  alumnosList : any;
  
  private usersUrl: string = 'https://localhost:44327/api/Student';
  private reportUrl: string = 'https://localhost:44327/api/InfoReportes';
  constructor(private httpClient: HttpClient) { }
  
  getAll() {
    let obs = this.httpClient.get(this.usersUrl);
    obs.subscribe((response) => console.log(response));

  }
  //getId(id: string) {
  //  let response = this.httpClient.get <AlumnadoGnl> (this.usersUrl + "/" + id).toPromise();
  //  return response;
  //}
  public async getId(id: number): Promise<AlumnadoGnl> {
    var response = this.httpClient.get<AlumnadoGnl>(this.usersUrl + "/" + id).toPromise();
    return response;

  }
  public async getData(): Promise<AlumnadoGnl> {
    const model = await this.httpClient.get<AlumnadoGnl>("https://localhost:44327/api/Student").toPromise();
    return model;
  }

  public async postReport(report: InfoReportesGnl): Promise<InfoReportesGnl> {
    var response = await this.httpClient.post<InfoReportesGnl>(this.reportUrl, report).toPromise();
    return response;
  }
  public async postAlumno(alumno: AlumnadoGnl): Promise<AlumnadoGnl> {
    var response = await this.httpClient.post<AlumnadoGnl>(this.usersUrl, alumno).toPromise();
    return response;
  }
  public async getAllStudents(): Promise<any>{
    //let obs = this.httpClient.get(this.usersUrl).subscribe(result => 
    //  this.alumnosList = result
    //);
    //await console.log(this.alumnosList);
    //let obs = await this.httpClient.get(this.usersUrl).subscribe(result =>
    //    this.alumnosList = result
    //  );
    var obs = await this.httpClient.get(this.usersUrl).toPromise();
    return obs;


  }
}
