import { Component, OnInit } from '@angular/core';
import { ILogin } from '../../../Models/Login';

import { Routes, RouterModule, Router } from '@angular/router';


@Component({
  selector: 'header-Selector',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public model: ILogin;
  public user: string;
  public contra: string;
  public show: boolean = false;
  public showB: boolean = false;
  public buttonName: any = 'Show';

  title = 'Escuela Secundaria Técnica #39';

  constructor(private router: Router) { }


  public ngOnInit() {
  }

  toggle() {
    this.show = !this.show;
  }


}
