import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Libro } from './libro';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LibroService {
  //urls para cada solicitud http
  private urlGet = 'http://localhost:8080/libros';
  private urlPost = 'http://localhost:8080/guardar';
  

  //httpClient se usa para realizar llamadas a api
  constructor(private clientHttp: HttpClient) { }

  //el observable emite objetos de tipo Libro
  listarLibros(): Observable<Libro[]> {
    return this.clientHttp.get<Libro[]>(this.urlGet);
  }

  //agregar libro
  agregarLibro(libro: Libro): Observable<Object> {
    //le digo que espere una respuesta de tipo texto, que es la que envío desde el back.
    //sino por defecto espera un json y peta.
    return this.clientHttp.post(this.urlPost, libro, { responseType: 'text' });
  }

  //obtener libro por id
  obtenerLibroPorId(id: number): Observable<Libro> {
    const urlGetId = `http://localhost:8080/libros/${id}`;
    return this.clientHttp.get<Libro>(urlGetId);
  }

  //editar libro
  editarLibro(id: number, libro: Libro): Observable<Object> {
    const urlPut = `http://localhost:8080/actualizar/${id}`;
    return this.clientHttp.put(urlPut, libro, { responseType: 'text' });
  }

  //borrar libro
  borrarLibro(id:number): Observable<Object>{
    const urlDelete = `http://localhost:8080/borrar/${id}`;
    return this.clientHttp.delete(urlDelete, { responseType: 'text' });

  }


}
