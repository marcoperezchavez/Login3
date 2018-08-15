import { Component, OnInit } from '@angular/core';



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
  public selection = 'insertar';
  public selectionReporte :string;
  title = 'Escuela Secundaria Técnica #39';

  constructor() { }


  public ngOnInit() {

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


}
