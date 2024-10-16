import {Component, Input, OnInit} from '@angular/core';
import {UserInterfaces} from '../../interfaces/user-interfaces';

import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css'
})
export class UserDetailsComponent implements OnInit{
  @Input()
  userDetails: UserInterfaces

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({userData}) => this.userDetails = userData)
  }

}
