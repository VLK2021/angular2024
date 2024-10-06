import { Component } from '@angular/core';
import {MenuHeaderComponent} from '../menu-header/menu-header.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MenuHeaderComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
