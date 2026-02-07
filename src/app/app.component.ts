import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { ButtonModule } from 'primeng/button';
import { CurrencyMaskDirective } from './currency-mask.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputTextModule,
    InputNumberModule,
    ButtonModule,
    CurrencyMaskDirective
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
  effortPercentage: number | null = null;
  hasCalculated = false;

  constructor(private fb: FormBuilder) {
    this.calcForm = this.fb.group({
      monthlySalary: [null, [Validators.required]],
      productPrice: [null, [Validators.required]],
      hoursPerDay: [null, [Validators.required, Validators.min(1), Validators.max(24)]],
      daysPerMonth: [null, [Validators.required, Validators.min(1), Validators.max(31)]]
    });
  }

  reset() {
    this.calcForm.reset();
    this.hourlyRate = null;
    this.hoursNeeded = null;
    this.daysNeeded = null;
    this.effortPercentage = null;
    this.hasCalculated = false;
  }

  calculate() {
    if (this.calcForm.invalid) {
      this.calcForm.markAllAsTouched();
      return;
    }

    const { monthlySalary, productPrice, hoursPerDay, daysPerMonth } = this.calcForm.value;

    if (monthlySalary && productPrice && hoursPerDay && daysPerMonth) {
      // 1. Valor da Hora = Relatório Mensal / (HorasDia * DiasMes)
      this.hourlyRate = monthlySalary / (hoursPerDay * daysPerMonth);

      // 2. Horas Necessárias = PreçoProduto / ValorHora
      if (this.hourlyRate && this.hourlyRate > 0) {
        this.hoursNeeded = productPrice / this.hourlyRate;

        // 3. Dias Equivalentes = HorasNecessárias / HorasDia
        this.daysNeeded = this.hoursNeeded / hoursPerDay;

        // 4. Porcentagem de Esforço Mensal
        const totalMonthlyHours = hoursPerDay * daysPerMonth;
        this.effortPercentage = (this.hoursNeeded / totalMonthlyHours) * 100;

      } else {
        this.hoursNeeded = 0;
        this.daysNeeded = 0;
        this.effortPercentage = 0;
      }

      this.hasCalculated = true;
    }
  }
}
