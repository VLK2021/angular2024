import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {AComponent} from './components/a/a.component';
import {BComponent} from './components/b/b.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AComponent, BComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular2024';
}
