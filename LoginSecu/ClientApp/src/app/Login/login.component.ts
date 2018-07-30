import { Component, OnInit } from '@angular/core';
import { ILogin } from '../../../Models/Login';

import { Routes, RouterModule, Router } from '@angular/router';


@Component({
  selector: 'login-Selector',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public model: ILogin;
  public user: string;
  public contra: string;

  title = 'Escuela Secundaria Técnica #39';

  constructor(private router: Router) { }


  public ngOnInit() {
  }

  public validation() {
    
    this.router.navigate(['/Menu']);
  }


}
