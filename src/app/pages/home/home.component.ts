import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { User } from 'src/app/models';
import { AuthenticationService, CardSetService } from 'src/app/services';

type Tab = 'my-cards' | 'public-cards';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  private _currentTab$ = new BehaviorSubject<Tab>('public-cards');
  private _destroy$ = new Subject<void>();

  user!: User | null;
  currentTab: Observable<Tab> = this._currentTab$.asObservable();

  constructor(
    private router: Router,
    private readonly auth: AuthenticationService,
    private readonly cardSet: CardSetService
  ) {}

  ngOnInit(): void {
    this._currentTab$.next('public-cards');
    this.subscribeToUserChanges();
    this.subscribeToTabChanges();
  }

  ngOnDestroy(): void {
    this._destroy$.next();
    this._destroy$.complete();
  }

  subscribeToUserChanges(): void {
    this.auth.user.pipe(takeUntil(this._destroy$)).subscribe((value) => {
      if (value) {
        this.user = value;
      } else {
        this.user = null;
        this._currentTab$.next('public-cards');
      }
    });
  }

  subscribeToTabChanges(): void {
    this._currentTab$.pipe(takeUntil(this._destroy$)).subscribe((value) => {
      if (value === 'public-cards') {
        this.cardSet.requestPublicSet().subscribe((value) => {
          console.log(value);
        });
      }
    });
  }

  updateTap(tab: Tab) {
    this._currentTab$.next(tab);
  }
  
  cardClickedHandler(cardSetId: string) {
    this.router.navigate(['word-display', cardSetId]);
  }

  cardClickedIconHandler(cardSetId: string) {
    this.router.navigate(['set-details', cardSetId]);
  }
}
