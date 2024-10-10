import { Routes } from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {UsersComponent} from './pages/users/users.component';
import {MaineLayoutComponent} from './layouts/maine-layout/maine-layout.component';
import {UserDetailsComponent} from './pages/user-details/user-details.component';

export const routes: Routes = [
  {
    path: '', component: MaineLayoutComponent, children: [
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: 'home', component: HomeComponent},
      {
        path: 'users', component: UsersComponent, children: [
          {path: ':id', component: UserDetailsComponent}
        ]
      },
      { path: '**', redirectTo: '', pathMatch: 'full' }
    ]
  }
];
