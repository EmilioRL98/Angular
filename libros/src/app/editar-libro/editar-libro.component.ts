import { Component } from '@angular/core';
import { Libro } from '../libro';
import { LibroService } from '../libro.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-editar-libro',
  imports: [ReactiveFormsModule],
  templateUrl: './editar-libro.component.html',
  styleUrl: './editar-libro.component.css'
})
export class EditarLibroComponent {

  libro :Libro = new Libro();
  id:number;

  constructor(private libroService: LibroService, private direccion : ActivatedRoute, 
    private routers: Router){}

    ngOnInit(){
      this.id = this.direccion.snapshot.params['id'];  
      this.cargarLibro();
    }

    onSubmit(){
      //aplicamos valores del formulario al objeto libro
      this.libro = this.applyForm.value as Libro;
      this.editarLibro();
    }

    //metodo para actualizar el libro segun su id
    private editarLibro(){
      this.libroService.editarLibro(this.id, this.libro).subscribe({
        next:(lamd)=>{
          console.log("Se ha ejecutado el put");
          this.listarLibros();
       }, error:(error :any)=> {console.log(error)}
      })
    }

      //metodo para redirigir a inicio
 private listarLibros(){
  console.log("redirigiendo");
    this.routers.navigate(['/inicio']);
  }

//binding formulario
  applyForm = new FormGroup({
    titulo: new FormControl(''),
    autor: new FormControl(''),
    genero: new FormControl(''),
    fechaPublicacion: new FormControl(''),  
  });

  //con este metodo cargamos los datos del libro seleccionado en el formulario
  private cargarLibro(){
    this.libroService.obtenerLibroPorId(this.id).subscribe({
      next: (libro) => {
        // Asignamos los datos del libro al formulario
        this.applyForm.setValue({
          titulo: libro.titulo,
          autor: libro.autor,
          genero: libro.genero,
          fechaPublicacion: libro.fechaPublicacion,
        });
      },
      error: (error: any) => {
        console.log('Error al cargar libro:', error);
      }
    });
  }
  
}
