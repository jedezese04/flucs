import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-card-editor-item',
  templateUrl: './card-editor-item.component.html',
  styleUrls: ['./card-editor-item.component.css'],
})
export class CardEditorItemComponent {
  @Input() card!: FormGroup;
  @Output() remove = new EventEmitter<void>();

  onRemove(): void {
    this.remove.emit();
  }
}
