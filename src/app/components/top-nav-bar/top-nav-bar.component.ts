import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { logoutUser } from '../../store/auth.actions';

@Component({
  selector: 'app-top-nav-bar',
  templateUrl: './top-nav-bar.component.html',
  styleUrls: ['./top-nav-bar.component.css'],
})
export class TopNavBarComponent implements OnInit {
  isLoggedIn: boolean = false;
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    let userSignedIn = localStorage.getItem('user');
    console.log(userSignedIn);
    if (userSignedIn) this.isLoggedIn = true;
  }

  logout() {
    this.store.dispatch(logoutUser());
  }
}
