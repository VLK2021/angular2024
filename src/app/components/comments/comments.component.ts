import {Component, OnInit} from '@angular/core';
import {IComments} from '../../interfaces/IComments';
import {CommentsService} from '../../services/comments.service';
import {CommentComponent} from '../comment/comment.component';
import {NgForOf} from '@angular/common';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [
    CommentComponent,
    NgForOf,
    RouterOutlet
  ],
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.css'
})
export class CommentsComponent implements OnInit{
  comments: IComments[] | undefined

  constructor(private commentService: CommentsService) {
  }


  ngOnInit(): void {
    this.commentService.getAll().subscribe(value => this.comments = value);
  }

}
