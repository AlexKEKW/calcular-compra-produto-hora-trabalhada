import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CurrencyMaskDirective } from './currency-mask.directive';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    CurrencyMaskDirective,
    MatSnackBarModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Calculadora de Horas de Trabalho';
  calcForm: FormGroup;

  hourlyRate: number | null = null;
  hoursNeeded: number | null = null;
  daysNeeded: number | null = null;

  constructor(private fb: FormBuilder, private snackBar: MatSnackBar) {
    this.calcForm = this.fb.group({
      monthlySalary: [null, [Validators.required, Validators.min(0)]],
      productPrice: [null, [Validators.required, Validators.min(0)]],
      hoursPerDay: [null, [Validators.required, Validators.min(1), Validators.max(24)]],
      daysPerMonth: [null, [Validators.required, Validators.min(1), Validators.max(31)]]
    });
  }

  reset() {
    this.calcForm.reset();
    this.hourlyRate = null;
    this.hoursNeeded = null;
    this.daysNeeded = null;

    this.snackBar.open('Formulário limpo!', 'Fechar', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'bottom'
    });
  }

  calculate() {
    if (this.calcForm.invalid) {
      console.error(`Formulário inválido: ${JSON.stringify(this.calcForm.errors)}`);
      this.hourlyRate = null;
      this.hoursNeeded = null;
      this.daysNeeded = null;
      return;
    }

    const { monthlySalary, productPrice, hoursPerDay, daysPerMonth } = this.calcForm.value;

    if (monthlySalary && productPrice && hoursPerDay && daysPerMonth) {
      // ValorHora = SalarioMensal / (HorasDia * DiasMes)
      this.hourlyRate = monthlySalary / (hoursPerDay * daysPerMonth);

      // HorasParaComprar = PrecoProduto / ValorHora
      if (this.hourlyRate && this.hourlyRate > 0) {
        this.hoursNeeded = productPrice / this.hourlyRate;

        // DiasParaComprar = HorasParaComprar / HorasDia
        this.daysNeeded = this.hoursNeeded / hoursPerDay;
      } else {
        this.hoursNeeded = 0;
        this.daysNeeded = 0;
      }
    }
  }
}
