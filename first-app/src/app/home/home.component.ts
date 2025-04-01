
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import {HousingLocation} from '../housinglocation';
import {Component, inject} from '@angular/core';
import {HousingService} from '../housing.service';

@Component({
  selector: 'app-home',
  imports: [HousingLocationComponent], //importamos componente donde se muestran las casas
  template: `
  <!--seccion para mostrar buscador -->
  <section>
    <form>
      <input type="text" placeholder="Filter by city" #filter>
      <button class="primary" type="button" (click)="filterResults(filter.value)">Search</button>
    </form>
  </section>
<!--seccion para mostrar casas. Usamos un for para recorrer array de casas y mostrarlas todas.
con la nueva directiva @for, es necesario incluir un trackeador para que angular identifique de manera unica cada elemento-->
  <section class="results">
  @for (housingLocation of filteredLocationList; track housingLocation.id)  {
  <app-housing-location [housingLocation]="housingLocation"></app-housing-location>
}
  </section>
  `,
  styleUrl: './home.component.css'
})

export class HomeComponent {
  
  readonly baseUrl = 'https://angular.dev/assets/images/tutorials/common';
  //variable para guardar la lista de casas
  housingLocationList: HousingLocation[] = [];
  //inyeccion de dependencia de servicio (para poder usar sus funciones)
  housingService: HousingService = inject(HousingService);
  //variable para guardar la lista de casas tras aplicar filtro
  filteredLocationList: HousingLocation[];
  constructor() {
 
    //inicializamos lista filtrada
 this.filteredLocationList = this.housingLocationList;

//extraemos una lista con todas las casas usando el metodo del housing.service
this.housingService.getAllHousingLocations().then((housingLocationList: HousingLocation[]) => {
  this.housingLocationList = housingLocationList;
  this.filteredLocationList = housingLocationList;
});
    
  }

  //con este metodo filtramos las casas cuya ciudad coincide con la ciudad ingresada por el usuario
  filterResults(text: string){
    if (!text) {
      this.filteredLocationList = this.housingLocationList;
      return;
    }
    this.filteredLocationList = this.housingLocationList.filter((housingLocation) =>
      housingLocation?.city.toLowerCase().includes(text.toLowerCase()),
    );
  }
 
}

