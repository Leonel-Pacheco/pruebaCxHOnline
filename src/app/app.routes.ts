
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'; // Reemplaza con tu componente inicial
import { AstudilloComponent } from './astudillo/astudillo.component'; // Componente para "Eq. Astudillo"
import { EscalanteComponent } from './escalante/escalante.component';
import { IvirisComponent } from './iviris/iviris.component';
import { JuarezComponent } from './juarez/juarez.component';
import { MaurenziComponent } from './maurenzi/maurenzi.component';
import { SilvaComponent } from './silva/silva.component';

export const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' }, // Ruta predeterminada
  { path: 'inicio', component: HomeComponent },
  { path: 'eq-astudillo', component: AstudilloComponent },
  { path: 'eq-escalante', component: EscalanteComponent },
  { path: 'eq-iviris', component: IvirisComponent },
  { path: 'eq-juarez', component: JuarezComponent },
  { path: 'eq-maurenzi', component: MaurenziComponent },
  { path: 'eq-silva', component: SilvaComponent },
  // Agrega más rutas para otros equipos
];
