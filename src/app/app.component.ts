import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'flucs';

  constructor(
    private auth: AuthenticationService
  ) {}

  ngOnInit(): void {
    this.auth.init()
  }

}
