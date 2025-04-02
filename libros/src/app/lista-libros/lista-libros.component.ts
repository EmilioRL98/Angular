import { Component } from '@angular/core';
import { LibroService } from '../libro.service';
import { Libro } from '../libro';
import { RouterOutlet } from '@angular/router';



@Component({
  selector: 'app-lista-libros',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './lista-libros.component.html',
  styleUrl: './lista-libros.component.css'
})
export class ListaLibrosComponent {
  librosLista:Libro[];
 
  constructor(private libroService : LibroService ){}

  ngOnInit(){  
    //este metodo se ejecuta al iniciar la aplicacion
    this.listarTodosLosLibros();
  }

  private listarTodosLosLibros(){
    //el subscribe nos permite recibir los valores que emite el observable
    this.libroService.listarLibros().subscribe(
      (lamd =>{
        this.librosLista=lamd;
      })
    )
  }
}
