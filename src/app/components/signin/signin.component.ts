import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { loginUser } from '../../store/auth.actions';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent implements OnInit {
  constructor(private store: Store<AppState>, private router: Router) {}

  ngOnInit(): void {
    let userSignedIn = localStorage.getItem('user');
    console.log(userSignedIn);
    if (userSignedIn) this.router.navigate(['/listRecipes']);
  }

  signIn(usernameInput: string, passwordInput: string) {
    this.store.dispatch(
      loginUser({
        username: usernameInput,
        password: passwordInput,
      })
    );
    this.router.navigate(['/listRecipes']);
  }
}
