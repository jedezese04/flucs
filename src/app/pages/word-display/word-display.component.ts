import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

type CardState = 'front' | 'back'
@Component({
  selector: 'app-word-display',
  templateUrl: './word-display.component.html',
  styleUrls: ['./word-display.component.css']
})
export class WordDisplayComponent {
  cardSetId!: string
  currentCardState: CardState = 'front'
  
  constructor(
    private route: ActivatedRoute,
    private location: Location
  ) {
    this.route.paramMap.subscribe(params => {
      this.cardSetId = params.get('cardSetId') || "undefined"
    })
  }

  goBack() {
    this.location.back()
  }

  switchCardState() {
    this.currentCardState = this.currentCardState === 'front' ? 'back' : 'front'
  }
}
