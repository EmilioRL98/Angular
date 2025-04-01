import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import {provideRouter} from '@angular/router';
import routeConfig from './app/routes';
import { provideProtractorTestingSupport } from '@angular/platform-browser';


//funcion que recibe componente principal y proveedores, inicia la aplicacion 
//y devuelve error si algo sale mal
bootstrapApplication(AppComponent, {
  providers: [provideProtractorTestingSupport(), provideRouter(routeConfig)],
}).catch((err) => console.error(err));
