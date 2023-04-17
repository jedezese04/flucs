import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators'
import { User } from 'src/app/models';
import { AuthenticationService } from 'src/app/services';

type Tab = 'my-cards' | 'public-cards'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  currentTab: Tab = 'my-cards'
  user!: User | null
  private destroy$ = new Subject<void>()

  constructor(
    private router: Router,
    private auth: AuthenticationService
  ) {}

  ngOnInit(): void {
    this.currentTab = 'public-cards'
    this.auth.user
      .pipe(takeUntil(this.destroy$))
      .subscribe((value) => {
        if(value) {
          this.user = value
        } else {
          this.user = null
          this.currentTab = 'public-cards'
        }
      })
  }
  
  ngOnDestroy(): void {
    this.destroy$.next()
    this.destroy$.complete()
  }

  updateTap(tab: Tab) {
    this.currentTab = tab
  }

  cardClickedHandler(cardSetId: string) {
    this.router.navigate(['word-display', cardSetId])
  }

  cardClickedIconHandler(cardSetId: string) {
    this.router.navigate(['set-details', cardSetId])
  }

}
