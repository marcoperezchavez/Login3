
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from "./Menu/Menu.component";

const routes: Routes = [
  {
    path: "",
    component: MenuComponent
  },
  { path: "Login", redirectTo: "/Login", pathMatch: "full" },
  { path: "Menu", redirectTo: "/Menu", pathMatch: "full" },
  { path: "counter", redirectTo: "/Counter", pathMatch: "full" }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
