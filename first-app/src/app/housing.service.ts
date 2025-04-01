import { Injectable } from '@angular/core';
import { HousingLocation } from './housinglocation';
 
//esta es una dependencia inyectable que incluye metodos a ser implementados
//en las clases necesarias.

//decorador que especifica que esta clase puede ser inyectada
@Injectable({
  providedIn: 'root'
})
export class HousingService {

  constructor() { }
  
  //url de "base de datos" local en formato JSON. Para abrirla usar el comando json-server --watch db.json
  url = 'http://localhost:3000/locations';

  //metodo asincrono que usa promesa para recibir el array de casas.
  //si el fetch falla se devuelve un array vacio
  async getAllHousingLocations(): Promise<HousingLocation[]> {
    const data = await fetch(this.url);
    return (await data.json()) ?? [];
  }

  //metodo asincrono que usa promesa para recibir una casa concreta segun su id.
  //si el fetch falla se devuelve un objeto vacio
  async getHousingLocationById(id: number): Promise<HousingLocation | undefined> {
    const data = await fetch(`${this.url}/${id}`);
    return (await data.json()) ?? {};
  }
  //metodo que usará el componente details para recibir valores desde formulario y mostrarlos en consola
  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(
      `Homes application received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}.`,
    );
  }
}
