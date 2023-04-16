import { Component } from '@angular/core';

type Tab = 'my-cards' | 'public-cards'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  currentTab: Tab = 'my-cards'

  constructor() {}

  updateTap(tab: Tab) {
    this.currentTab = tab
  }

}
