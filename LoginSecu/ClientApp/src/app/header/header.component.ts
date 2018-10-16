import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'header-Selector',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public user: string;
  public contra: string;
  public show = false;
  public showB = false;
  public buttonName: any = 'Show';
  public isInsert = false;
  public isDelete = false;
  public isUpdate = false;
  public isSelect = false;
  public selection = 'seleccionar';
  public selectionReporte :string;
  title = 'Escuela Secundaria Técnica 39';
  titleFelix= 'Félix Flores Gómez';

  constructor(private router: Router) { }

  public ngOnInit() {

  }
  toggle() {
    this.show = !this.show;
  }
  selectInsertar() {
    this.router.navigate(['Menu']);
    this.selection = 'insertar';
  }

  selectEliminar() {
    this.router.navigate(['Menu']);
    this.selection = 'eliminar';
  }

  selectModificar() {
    this.router.navigate(['Menu']);
    this.selection = 'modificar';
  }

  selectSeleccionar() {
    this.router.navigate(['Menu']);
    this.selection = 'seleccionar';
  }

  selectSeleccionarReporte() {
    this.selectionReporte = 'seleccionar';
  }

  selectInsertarReporte() {
    this.selectionReporte = 'insertar';
  }

  selectEliminarReporte() {
    this.selectionReporte = 'eliminar';
  }

  selectModificarReporte() {
    this.selectionReporte = 'modificar';
  }

  goToHome() {
    alert("dsfsdfsdfsdf");
    this.router.navigate(['/login']);
  }


}
