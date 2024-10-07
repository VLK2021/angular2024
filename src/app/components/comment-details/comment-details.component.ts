import { Component, OnInit } from '@angular/core';
import { IComments } from '../../interfaces/IComments';
import { ActivatedRoute } from '@angular/router';
import { CommentsService } from '../../services/comments.service';

@Component({
  selector: 'app-comment-details',
  standalone: true,
  imports: [],
  templateUrl: './comment-details.component.html',
  styleUrls: ['./comment-details.component.css']  // Виправлено на styleUrls
})
export class CommentDetailsComponent implements OnInit {
  comment: IComments | undefined;

  constructor(
    private commentService: CommentsService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({ id }) => {
      this.commentService.getById(id).subscribe((value: IComments) => {
        this.comment = value;
      });
    });
  }
}
