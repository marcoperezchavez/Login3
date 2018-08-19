import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { AlumnadoGnl } from "../../Models/AlumnadoGnl";

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
  private Alumnado :AlumnadoGnl;
  private usersUrl: string = 'https://localhost:44327/api/Student';
  constructor(private httpClient: HttpClient) { }
  
  getAll() {
    let obs = this.httpClient.get(this.usersUrl);
    obs.subscribe((response) => console.log(response));

  }
  //getId(id: string) {
  //  let response = this.httpClient.get <AlumnadoGnl> (this.usersUrl + "/" + id).toPromise();
  //  return response;
  //}
  async getId(id: number): Promise<AlumnadoGnl> {
    return this.httpClient.get<AlumnadoGnl>(this.usersUrl + "/" + id).toPromise();

  }


  

  public async getData(): Promise<AlumnadoGnl> {
    const model = await this.httpClient.get<AlumnadoGnl>("https://localhost:44327/api/Student").toPromise();

    return model;
  }
  
}

