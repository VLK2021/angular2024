import { Routes } from '@angular/router';
import {MainLayoutComponent} from './layouts/main-layout/main-layout.component';
import {UsersComponent} from './pages/users/users.component';
import {UserDetailsComponent} from './components/user-details/user-details.component';
import {PostsComponent} from './pages/posts/posts.component';

export const routes: Routes = [
  {
    path: '', component: MainLayoutComponent, children: [
      {path: '', redirectTo: 'users', pathMatch: 'full'},
      {
        path: 'users', component: UsersComponent, children: [
          {path: ':id', component: UserDetailsComponent}
        ]
      },
      {path: 'posts', component: PostsComponent},
      { path: '**', redirectTo: '', pathMatch: 'full' }
    ]
  }
];
