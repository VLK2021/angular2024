import {Component, OnInit} from '@angular/core';
import {NgForOf, NgIf} from '@angular/common';

import {UserService} from '../../services/user.service';
import {IUser} from '../../interfaces/IUser';
import {UserComponent} from '../user/user.component';
import {UserDetailsComponent} from '../user-details/user-details.component';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    NgForOf,
    UserComponent,
    UserDetailsComponent,
    NgIf
  ],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit {
  users: IUser[] | undefined
  userDetails: IUser | undefined

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.userService.getAll().subscribe(value => this.users = value);
  }


  getUser(userDetail: IUser) {
    this.userDetails = userDetail;
  }
}
