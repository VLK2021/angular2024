import {Component, Input, OnInit} from '@angular/core';
import {UserInterfaces} from '../../interfaces/user-interfaces';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../services/user.service';

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

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private userService: UserService) {
    this.activatedRoute.params.subscribe(({id}) => {
      this.userDetails = this.router.getCurrentNavigation()?.extras.state as UserInterfaces;

      if(!this.userDetails) {
        this.userService.getById(id).subscribe(value => this.userDetails = value)
      }
    })

  }

  ngOnInit(): void {
  }

}
