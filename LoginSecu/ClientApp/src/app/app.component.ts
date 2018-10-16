
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
  public show = false;
  public showB = false;
  public buttonName: any = 'Show';
  public isMainMenu = true;


  title = 'Escuela Secundaria Técnica 39';
  titleFelix = 'Félix Flores Gómez';

  constructor(private router: Router) {}


  // tslint:disable-next-line:use-life-cycle-interface
  public ngOnInit() {
  }

  public validation() {
    alert(this.user);
    this.isMainMenu = false;
    this.router.navigate(['./Menu']);
  }
  toggle() {
    this.show = !this.show;
  }

}
