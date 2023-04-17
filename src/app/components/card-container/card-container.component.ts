import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CardSet } from 'src/app/models';

@Component({
  selector: 'app-card-container',
  templateUrl: './card-container.component.html',
  styleUrls: ['./card-container.component.css']
})
export class CardContainerComponent {
  @Input() cardSet!: CardSet & { remembered: string }
  @Output() clickEvent = new EventEmitter()
  @Output() iconClickEvent = new EventEmitter()

  emitClickEvent(event: MouseEvent) {
    this.clickEvent.emit(event)
  }

  emitIconClickEvent(event: MouseEvent) {
    this.iconClickEvent.emit(event)
  }
}
