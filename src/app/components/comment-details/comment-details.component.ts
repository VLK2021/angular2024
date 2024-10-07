import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {IComments} from '../../interfaces/IComments';
import {CommentsService} from '../../services/comments.service';

@Component({
  selector: 'app-comment-details',
  standalone: true,
  imports: [],
  templateUrl: './comment-details.component.html',
  styleUrl: './comment-details.component.css'
})
export class CommentDetailsComponent implements OnInit{
  comment: IComments | undefined

  constructor(private commentService:CommentsService, private activatedRoute:ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id}) => {
      this.commentService.getById(id).subscribe(value => this.comment = value);
    })
  }

}
