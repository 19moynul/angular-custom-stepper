import { Component, Input } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatStepperModule} from '@angular/material/stepper';
import { StepperOrientation } from '@angular/material/stepper';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css']
})


export class StepperComponent {
  @Input() orientationStyle:StepperOrientation = 'horizontal'
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });

  steps = [
    {
      label: 'Fill out your name',
      addInfo: 'Additional Info',
      inputType: 'text',
      inputLabel: 'Name',
      inputPlaceholder: 'Last name, First name',
      formGroup: this._formBuilder.group({ firstCtrl: ['', Validators.required] }),
      formControlName: 'firstCtrl',
    },
    {
      label: 'Fill out your address',
      addInfo: 'Additional Info',
      inputType: 'text',
      inputLabel: 'Address',
      inputPlaceholder: 'Ex. 1 Main St, New York, NY',
      formGroup: this._formBuilder.group({ secondCtrl: ['', Validators.required] }),
      formControlName: 'secondCtrl',
    },
    {
      label: 'Fill out your address',
      addInfo: 'Additional Info',
      inputType: 'text',
      inputLabel: 'Address',
      inputPlaceholder: 'Ex. 1 Main St, New York, NY',
      formGroup: this._formBuilder.group({ secondCtrl: ['', Validators.required] }),
      formControlName: 'secondCtrl',
    },
  ];

  constructor(private _formBuilder: FormBuilder) {}
}
