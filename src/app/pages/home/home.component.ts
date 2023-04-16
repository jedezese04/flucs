import { Component } from '@angular/core';
import { Router } from '@angular/router';

type Tab = 'my-cards' | 'public-cards'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  currentTab: Tab = 'my-cards'

  constructor(
    private router: Router
  ) {}

  updateTap(tab: Tab) {
    this.currentTab = tab
  }

  cardClickedHandler(cardSetId: string) {
    this.router.navigate(['word-display', cardSetId])
  }

}
