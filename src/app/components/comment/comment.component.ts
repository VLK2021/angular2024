import {Component, Input} from '@angular/core';
import {IComments} from '../../interfaces/IComments';
import {ActivatedRoute, Router} from '@angular/router';

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

  constructor(private router:Router, private activatedRoute:ActivatedRoute) {
  }

  getDetails(): void {
    this.router.navigate([this.comment?.id], {relativeTo: this.activatedRoute});
  }
}
