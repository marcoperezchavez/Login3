import { Component, OnInit } from '@angular/core';
import { ILogin } from '../../../Models/Login';

import { Routes, RouterModule, Router } from '@angular/router';


@Component({
  // tslint:disable-next-line:component-selector
  selector: 'header-Selector',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public model: ILogin;
  public user: string;
  public contra: string;
  public show = false;
  public showB = false;
  public buttonName: any = 'Show';
  public isInsert = false;
  public isDelete = false;
  public isUpdate = false;
  public isSelect = false;
  public selection: string;

  title = 'Escuela Secundaria Técnica #39';

  constructor(private router: Router) { }


  public ngOnInit() {
    this.selection = 'insertar';
  }

  toggle() {
    this.show = !this.show;
  }
  selectInsertar() {
    this.selection = 'insertar';
  }
  selectEliminar() {
    this.selection = 'eliminar';
  }
  selectModificar() {
    this.selection = 'modificar';
  }
  selectSeleccionar() {
    this.selection = 'seleccionar';
  }



}
