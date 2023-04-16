import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardEditorItemComponent } from './card-editor-item.component';

describe('CardEditorItemComponent', () => {
  let component: CardEditorItemComponent;
  let fixture: ComponentFixture<CardEditorItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardEditorItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardEditorItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
