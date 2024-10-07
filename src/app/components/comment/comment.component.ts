import {Component, Input} from '@angular/core';
import {IComments} from '../../interfaces/IComments';

@Component({
  selector: 'app-comment',
  standalone: true,
  imports: [],
  templateUrl: './comment.component.html',
  styleUrl: './comment.component.css'
})
export class CommentComponent {
  @Input()
  comment: IComments | undefined

}
