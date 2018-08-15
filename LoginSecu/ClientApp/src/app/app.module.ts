import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './Menu/menu.component';
import { LoginComponent } from './Login/login.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatFormFieldModule,
  MatGridListModule,
  MatIconModule,
  MatIconRegistry,
  MatInputModule,
  MatMenuModule,
  MatNativeDateModule,
  MatOptionModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatSelectModule,
  MatSnackBarModule,
  MatToolbarModule,
  MatTooltipModule,
  MatExpansionModule, MatSidenavModule, MatListModule
} from "@angular/material";
import { RegistrarComponent } from './registrar/registrar.component';
import { BorrarComponent } from './borrar/borrar.component';
import { InsertarComponent } from './insertar/insertar.component';
import { ModificarComponent } from './modificar/modificar.component';
import { ContactoComponent } from './contacto/contacto.component';
import { SeleccionarComponent } from './seleccionar/seleccionar.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { InsertarReporteComponent } from './insertar-reporte/insertar-reporte.component';
import { BorrarReporteComponent } from './borrar-reporte/borrar-reporte.component';
import { ModificarReporteComponent } from './modificar-reporte/modificar-reporte.component';
import { BuscarReporteComponent } from './buscar-reporte/buscar-reporte.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    HeaderComponent,
    MenuComponent,
    LoginComponent,
    CounterComponent,
    FetchDataComponent,
    RegistrarComponent,
    BorrarComponent,
    InsertarComponent,
    ModificarComponent,
    ContactoComponent,
    SeleccionarComponent,
    MainNavComponent,
    InsertarReporteComponent,
    BorrarReporteComponent,
    ModificarReporteComponent,
    BuscarReporteComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    HttpClientModule,
    // Material Design
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatFormFieldModule,
    MatGridListModule,
    MatInputModule,
    MatIconModule,
    MatNativeDateModule,
    MatRadioModule,
    MatToolbarModule,
    MatTooltipModule,
    MatOptionModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatSnackBarModule,
    MatMenuModule,
    MatExpansionModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: LoginComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'insertar-reporte', component: InsertarReporteComponent },
      { path: 'Menu', component: MenuComponent },
      { path: 'fetch-data', component: FetchDataComponent },
    ]),
    LayoutModule,
    MatSidenavModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
