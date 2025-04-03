import { Component } from '@angular/core';
import { LibroService } from '../libro.service';
import { Libro } from '../libro';
import { Router, RouterOutlet } from '@angular/router';



@Component({
  selector: 'app-lista-libros',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './lista-libros.component.html',
  styleUrl: './lista-libros.component.css'
})
export class ListaLibrosComponent {
  librosLista:Libro[];
 
  constructor(private libroService : LibroService, private routers:Router){}

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

  editarLibro(id:number){
    //cuando pulsamos el boton editar, 
    //navegamos el componente editar y pasamos el id del libro
    this.routers.navigate(['editar',id]);
  }

  //borramos libro segun su id
  borrarLibro(id:number){
    this.libroService.borrarLibro(id).subscribe({
      next: (lamd)=>
        this.listarTodosLosLibros(),
        error:(err:any)=>console.log(err)
    });
  }
}
