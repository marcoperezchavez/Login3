
import { Component, OnInit  } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';


import { ILogin } from '../../models/login';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public model: ILogin;
  public user: string;
  public contra: string;
  public show: boolean = false;
  public showB: boolean = false;
  public buttonName: any = 'Show';
  public isMainMenu: boolean = true;


  title = 'Escuela Secundaria Técnica #39';

  constructor(private router: Router) {}


  public ngOnInit() {
  }

  public validation() {
    alert(this.user);
   this.isMainMenu=false;
    this.router.navigate(['./Menu']);
  }
  toggle() {
    this.show = !this.show;
  }

}
