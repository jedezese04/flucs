import { Component } from '@angular/core';
import { CardSet } from '../../models';

@Component({
  selector: 'app-set-details',
  templateUrl: './set-details.component.html',
  styleUrls: ['./set-details.component.css']
})
export class SetDetailsComponent {
  cardSet: CardSet = {
    name: 'Math Formula',
    type: 'Math',
    creator: {
      userId: "1",
      username: "jedezese04",
      displayName: "Jedsada"
    },
    public: true,
    cards: [
      { word: 'Word 1', definition: 'Definition 1', remembered: true },
      { word: 'Word 2', definition: 'Definition 2', remembered: true },
      { word: 'Word 3', definition: 'Definition 3', remembered: false },
      { word: 'Word 4', definition: 'Definition 4', remembered: true },
    ],
  };

  get rememberedCount(): number {
    return this.cardSet.cards.filter(card => card.remembered).length;
  }
}
