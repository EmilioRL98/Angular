import { Routes } from '@angular/router';
import { ListaLibrosComponent } from './lista-libros/lista-libros.component';
import { AgregarLibroComponent } from './agregar-libro/agregar-libro.component';

export const routes: Routes = [
//en la ruta inicio se mostrará la lista de libros
    {path: 'inicio', component: ListaLibrosComponent},
//la ruta por defecto será inicio. El pathMatch hace que solo se
//redirija a inicio si la ruta actual es exactamente la raiz "/"
    {path: '',redirectTo:'inicio', pathMatch: 'full'},
    {path: 'agregar', component: AgregarLibroComponent}
];
