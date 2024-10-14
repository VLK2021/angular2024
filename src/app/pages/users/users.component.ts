import {Component, OnInit} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {UserInterfaces} from '../../interfaces/user-interfaces';
import {UserService} from '../../services/user.service';
import {UserComponent} from '../../components/user/user.component';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    RouterOutlet,
    UserComponent,
    NgForOf
  ],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit {
  users: UserInterfaces[];
  userDetails: UserInterfaces;


  constructor(private userService: UserService) {
  }


  ngOnInit(): void {
    this.userService.getAll().subscribe(value => this.users = value)
  }

  getUser(userDetail: UserInterfaces) {
    this.userDetails = userDetail;
  }

}
