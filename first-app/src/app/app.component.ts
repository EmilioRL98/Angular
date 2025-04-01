import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {RouterModule} from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule ],
  template: `
<main>
<!--el logo es un enlace que nos devuele a la pagina de inicio '/'-->
      <a [routerLink]="['/']">
        <header class="brand-name">
          <img class="brand-logo" src="/assets/logo.svg" alt="logo" aria-hidden="true" />
        </header>
      </a>
      <section class="content">
<!--aqui se inserta el componente home-component porque asi está definido en el archivo de rutas con  path: '',
es decir, router-outlet hace referencia al componente que tenga marcada esta ruta como activa-->
        <router-outlet></router-outlet>
      </section>
    </main>
  
`,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'homes';
}
