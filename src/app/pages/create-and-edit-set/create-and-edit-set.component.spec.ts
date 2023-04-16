import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAndEditSetComponent } from './create-and-edit-set.component';

describe('CreateAndEditSetComponent', () => {
  let component: CreateAndEditSetComponent;
  let fixture: ComponentFixture<CreateAndEditSetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateAndEditSetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateAndEditSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
