import { Component } from '@angular/core';
import {CounterService} from '../../services/counter.service';

@Component({
  selector: 'app-b',
  standalone: true,
  imports: [],
  templateUrl: './b.component.html',
  styleUrl: './b.component.css'
})
export class BComponent {


  constructor(private counterService: CounterService) {
  }

  inc() {
    this.counterService.count.next(this.counterService.count.value + 1)
  }

  dec() {
    this.counterService.count.next(this.counterService.count.value - 1)
  }

  reset() {
    this.counterService.count.next(0)
  }
}
