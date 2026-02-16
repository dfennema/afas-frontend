import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-api-tools',
  imports: [ReactiveFormsModule],
  templateUrl: './api-tools.html',
  styleUrl: './api-tools.css',
})
export class ApiTools {
  private fb = inject(FormBuilder);

  form: FormGroup;

  constructor() {
    this.form = this.fb.group({
      company: new FormControl('', Validators.required),
      environment: new FormControl('', Validators.required)
    });
  }
};