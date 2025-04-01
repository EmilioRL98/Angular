import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HousingLocation} from '../housinglocation';
import { RouterLink } from '@angular/router';
import { DetailsComponent } from '../details/details.component';

@Component({
  selector: 'app-housing-location',
  imports: [RouterLink],
  template: `
   <section class="listing">

<!-- El enlace consta de dos partes: La estática, que es la ruta a la que navegaremos; y la dinámica, que es un parámetro variable que pasamos por url.-->
   <a [routerLink]="['/details', housingLocation.id]">Learn More</a>
<!--mostramos imagen e informacion de casa -->
   <img
        class="listing-photo"
        [src]="housingLocation.photo"
        alt="Exterior photo of {{ housingLocation.name }}"
        crossorigin
      />
      <h2 class="listing-heading">{{ housingLocation.name }}</h2>
      <p class="listing-location">{{ housingLocation.city }}, {{ housingLocation.state }}</p>
    </section>
    
  `,
  styleUrls: ['./housing-location.component.css'],
  
  
})
export class HousingLocationComponent {

  //housingLocation será un input que añadamos desde la clase padre
  @Input() housingLocation!: HousingLocation;

}
