import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-card-container',
  templateUrl: './card-container.component.html',
  styleUrls: ['./card-container.component.css']
})
export class CardContainerComponent {
  @Output() clickEvent = new EventEmitter()
  @Output() iconClickEvent = new EventEmitter()

  emitClickEvent(event: MouseEvent) {
    this.clickEvent.emit(event)
  }

  emitIconClickEvent(event: MouseEvent) {
    this.iconClickEvent.emit(event)
  }
}
