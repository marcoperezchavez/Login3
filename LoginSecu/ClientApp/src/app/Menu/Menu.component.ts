import { Component, OnInit, ViewChild  } from '@angular/core';
import { HeaderComponent } from '../header/header.component';


@Component({
  // tslint:disable-next-line:component-selector
  selector: 'menu-home',
  templateUrl: './Menu.component.html',
  styleUrls: ['./Menu.component.css']
})

export class MenuComponent implements OnInit {
  public optionSelected: string;
  @ViewChild(HeaderComponent) header: HeaderComponent;

  public constructor() { }


  public ngOnInit() {

  }
}
