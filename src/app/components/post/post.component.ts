import {Component, EventEmitter, Input, Output} from '@angular/core';
import {IPost} from '../../interfaces/IPost';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent {
  @Input()
  post: IPost | undefined

  @Output()
  lift = new EventEmitter<IPost>();

  details() {
    this.lift.emit(this.post);
  }
}
