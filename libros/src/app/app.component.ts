import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListaLibrosComponent } from "./lista-libros/lista-libros.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'libros';
}
