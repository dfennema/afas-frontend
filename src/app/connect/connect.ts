import { Component, inject, signal } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Omgeving } from './omgeving.model';
import { ConnectService } from './connect-service';

@Component({
  selector: 'app-connect',
  imports: [ReactiveFormsModule],
  templateUrl: './connect.html',
  styleUrl: './connect.css',
})
export class Connect {
  private fb = inject(FormBuilder);
  private connectService = inject(ConnectService);

  omgevingen = [
    new Omgeving('acc', 'Acceptatie'),
    new Omgeving('prd', 'Produktie'),
    new Omgeving('tst', 'Test'),    
  ]
  
  form: FormGroup;
  showToken = signal(false);
  errorMessage = signal<string | null>(null);
  geselecteerdeOmgeving: string = 'tst';

  constructor() {
    this.form = this.fb.group({
      bedrijf: new FormControl('', Validators.required),
      omgeving: new FormControl(null, Validators.required),
      token: new FormControl('', Validators.required),
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

    this.connectService.fetchData(this.geselecteerdeOmgeving, this.form.value.bedrijf, this.form.value.token)
  }

  onReset() {
    this.form.reset();
  }

  toggleTokenVisibility() {
    console.log('voor ' + this.showToken())
    this.showToken.set(!this.showToken());
    console.log('na ' + this.showToken())
  }
}
