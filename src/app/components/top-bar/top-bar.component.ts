import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators'
import { AuthenticationService } from '../../services';
import { User } from 'src/app/models';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css'],
})
export class TopBarComponent implements OnInit, OnDestroy {
  user?: User;
  loggingIn: boolean = false
  private destroy$ = new Subject<void>()

  constructor(private auth: AuthenticationService) {}

  ngOnInit(): void {
    this.auth.user
      .pipe(takeUntil(this.destroy$))
      .subscribe((value) => {
        if(value) {
          this.user = value
          this.loggingIn = false
        } else {
          this.user = undefined
        }
      })
  }

  ngOnDestroy(): void {
    this.destroy$.next()
    this.destroy$.complete()
  }

  loginClickHandler(username: string) {
    if (this.user) {
      this.auth.logout();
    } else {
      this.loggingIn = true
      this.auth.login({ username })
    }
  }
}
