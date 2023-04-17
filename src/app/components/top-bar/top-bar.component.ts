import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services';
import { User } from 'src/app/models';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css'],
})
export class TopBarComponent implements OnInit {
  user?: User;
  loggingIn: boolean = false

  constructor(private auth: AuthenticationService) {}

  ngOnInit(): void {
    if (this.auth.getUser()) this.user = this.auth.getUser()!;
  }

  loginClickHandler(username: string) {
    if (this.user) {
      this.auth.logout();
      this.user = undefined
    } else {
      this.loggingIn = true
      this.auth.login({ username }).subscribe(() => {
        this.user = this.auth.getUser()!;
        this.loggingIn = false
      });
    }
  }
}
