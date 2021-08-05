import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/auth';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  user: User | null = null;
  constructor() {}

  ngOnInit(): void {
    this.user = <User>JSON.parse(<string>localStorage.getItem('user'));
  }
}
