import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './main.component';
import { HomeComponent } from './home/home.component';
import { PerfilComponent } from './perfil/perfil.component';

const routes: Routes = [
  { component: HomeComponent, path: '',},
  { component: PerfilComponent,path: 'perfil'},
];

export const appRoutes: any = RouterModule.forRoot(routes);
