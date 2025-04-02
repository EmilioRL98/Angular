import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { ListaLibrosComponent } from './app/lista-libros/lista-libros.component';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';

bootstrapApplication(AppComponent, {
  providers: [provideHttpClient(withFetch()), provideRouter(routes)] // Esto provee HttpClient en la aplicación
}).catch((err) => console.error(err));
