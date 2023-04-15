import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-word-display',
  templateUrl: './word-display.component.html',
  styleUrls: ['./word-display.component.css']
})
export class WordDisplayComponent {
  cardSetId!: string
  
  constructor(
    private route: ActivatedRoute
  ) {
    this.route.paramMap.subscribe(params => {
      this.cardSetId = params.get('cardSetId') || "undefined"
    })
  }
}
