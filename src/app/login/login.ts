import { Component, inject, signal } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Omgeving } from '../connect/omgeving.model';
import { ConnectService } from '../connect/connect-service';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  private fb = inject(FormBuilder);
  private loginService = inject(LoginService);

  omgevingen = [
    new Omgeving('acc', 'Acceptatie'),
    new Omgeving('prd', 'Produktie'),
    new Omgeving('tst', 'Test'),    
  ]
  
  form: FormGroup;
  errorMessage = signal<string | null>(null);
  geselecteerdeOmgeving: string = 'tst';

  constructor() {
    this.form = this.fb.group({
      email: new FormControl('', Validators.required),
      // bedrijf: new FormControl('', Validators.required),
      // omgeving: new FormControl(null, Validators.required),
    });
  }

  ngOnInit(): void {
    // this.form.get('omgeving')?.setValue('tst');
  }

  onSubmit() {
    console.log(this.form);
    console.log('geselecteerdeOmgeving" ' + this.geselecteerdeOmgeving )
    if (this.form.invalid) {
      return;
    }

    this.loginService.login(this.form.value.email);
  }

  onReset() {
    this.form.reset();
  }
}
