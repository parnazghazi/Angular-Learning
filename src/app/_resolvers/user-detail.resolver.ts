
import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { User } from '../_models/user.interface';
import { UserService } from '../services/user.service';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Post } from '../_models/post';

@Injectable()
export class UserDetailResolver implements Resolve<Post[]> {
    constructor(
        private router: Router,
        private userSv: UserService
    ) { }

    resolve(route: ActivatedRouteSnapshot): Observable<Post[]> {
        return this.userSv.getposts(route.params['id']).pipe(
            catchError(error => {
                console.log(error);
                this.router.navigate(['/users']);
                return of(null);
            })
        );
    }
}