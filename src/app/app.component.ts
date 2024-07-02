import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HomepageModule} from "./pages/homepage/homepage.module";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomepageModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'marta-ngportfolio';
}
