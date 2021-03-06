import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { User } from '../models/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private httpClient: HttpClient) {}

  login(username: string, password: string) {
    return this.httpClient
      .get(
        `${environment.apiURL}users?username=${username}&password=${password}`
      )
      .pipe(
        switchMap((users: any) => {
          let user = <User>users[0];
          if (user) {
            return of(user);
          } else {
            return throwError('Login error');
          }
        })
      );
  }

  updateUser(user: User) {
    console.log(user.id);
    console.log(user.bookmarked);
    return this.httpClient.patch<User>(
      `${environment.apiURL}users/${user.id}`,
      { id: user.id, bookmarked: [...user.bookmarked] }
    );
  }

  userAteOneMeal(user: User) {
    return this.httpClient.patch<User>(
      `${environment.apiURL}users/${user.id}`,
      {
        id: user.id,
        allTimeCalories: user.allTimeCalories,
        allTimeCarbs: user.allTimeCarbs,
        allTimeFat: user.allTimeFat,
        allTimeProtein: user.allTimeProtein,
      }
    );
  }
}
