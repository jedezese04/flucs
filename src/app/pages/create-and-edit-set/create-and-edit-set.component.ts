import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, AbstractControl } from '@angular/forms';
import { CardSet } from '../../models';

@Component({
  selector: 'app-create-and-edit-set',
  templateUrl: './create-and-edit-set.component.html',
  styleUrls: ['./create-and-edit-set.component.css'],
})
export class CreateAndEditSetComponent implements OnInit {
  cardSetForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.cardSetForm = this.fb.group({
      name: ['', Validators.required],
      type: ['', Validators.required],
      public: [true],
      cards: this.fb.array([this.createCard()]),
    });
  }

  get cards(): FormArray {
    return this.cardSetForm.get('cards') as FormArray;
  }

  createCard(): FormGroup {
    return this.fb.group({
      word: ['', Validators.required],
      definition: ['', Validators.required],
    });
  }

  addCard(): void {
    (this.cardSetForm.get('cards') as FormArray).push(this.createCard());
  }

  removeCard(index: number): void {
    (this.cardSetForm.get('cards') as FormArray).removeAt(index)
  }

  onSubmit(): void {
    const cardSet: CardSet = this.cardSetForm.value;
    console.log(cardSet);
  }

  castToFormGroup(control: AbstractControl): FormGroup {
    return control as FormGroup;
  }
}
