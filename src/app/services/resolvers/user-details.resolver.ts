import {ResolveFn, Router} from '@angular/router';
import {inject} from '@angular/core';

import {UserInterfaces} from '../../interfaces/user-interfaces';
import {UserService} from '../user.service';


export const userDetailsResolver: ResolveFn<UserInterfaces> = (route, state) => {
  const router = inject(Router);
  const user = router.getCurrentNavigation()?.extras.state as UserInterfaces;

  if(!user){
    const {id} = route.params;
    const userService = inject(UserService);
    return userService.getById(id);
  }

  return user;
};
