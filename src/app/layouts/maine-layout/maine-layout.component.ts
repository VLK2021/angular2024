import { Component } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {HeaderComponent} from '../../components/header/header.component';

@Component({
  selector: 'app-maine-layout',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent
  ],
  templateUrl: './maine-layout.component.html',
  styleUrl: './maine-layout.component.css'
})
export class MaineLayoutComponent {

}
