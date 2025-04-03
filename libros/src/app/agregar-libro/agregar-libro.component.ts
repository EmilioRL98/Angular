import { Component } from '@angular/core';
import { Libro } from '../libro';
import { LibroService } from '../libro.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-agregar-libro',
  imports: [ReactiveFormsModule],
  templateUrl: './agregar-libro.component.html',
  styleUrl: './agregar-libro.component.css'
})
export class AgregarLibroComponent {
  libro : Libro = new Libro();
  constructor(private libroService: LibroService, private enrutador:Router){}

  //al pulsar el boton llamamos al metodo para agregar libro
  //que a su vez nos devuelve a inicio
 onSubmit(){
  this.libro = this.applyForm.value as Libro;
    this.guardarLibro();
    
  }

  private guardarLibro(){
    this.libroService.agregarLibro(this.libro).subscribe(
      {
        next:(lamd)=>{
          console.log("Se ha ejecutado el post");
          this.listarLibros();
       }, error:(error :any)=> {console.log(error)}
      }
    )
  }

  //metodo para redirigir a inicio
 private listarLibros(){
  console.log("redirigiendo");
    this.enrutador.navigate(['/inicio']);
  }

  applyForm = new FormGroup({
    titulo: new FormControl(''),
    autor: new FormControl(''),
    genero: new FormControl(''),
    fechaPublicacion: new FormControl(''),
  
  });

}
