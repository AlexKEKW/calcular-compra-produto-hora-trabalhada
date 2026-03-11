import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { ButtonModule } from 'primeng/button';
import { ChartModule } from 'primeng/chart';
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
    ChartModule,
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

  chartData: any;
  chartOptions: any;

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
    this.chartData = null;
    this.chartOptions = null;
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
        
        this.initChart();

      } else {
        this.hoursNeeded = 0;
        this.daysNeeded = 0;
        this.effortPercentage = 0;
      }

      this.hasCalculated = true;
    }
  }

  initChart() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--neutral-700');
    const surfaceBorder = documentStyle.getPropertyValue('--neutral-200');
    
    // For visual representation, cap at 100% for the progress part, 
    // or just display the real value if it overflows to be visually striking.
    const isOverBudget = this.effortPercentage! > 100;
    const progressColor = isOverBudget ? '#ef4444' : '#5b4eff'; 
    const remainingColor = '#f4f4f5';

    let displayPercentage = this.effortPercentage!;
    let remainingPercentage = 100 - displayPercentage;
    
    if (displayPercentage > 100) {
      remainingPercentage = 0; // Don't show negative remaining space
    }

    this.chartData = {
      labels: ['Progresso'],
      datasets: [
        {
          label: 'Tempo Comprometido',
          backgroundColor: progressColor,
          data: [displayPercentage],
          barPercentage: 0.5,
          borderRadius: 100, // fully rounded ends
          borderSkipped: false
        },
        {
          label: 'Tempo Livre',
          backgroundColor: remainingColor,
          data: [remainingPercentage],
          barPercentage: 0.5,
          borderRadius: 100,
          borderSkipped: false
        }
      ]
    };

    this.chartOptions = {
      indexAxis: 'y', // making it horizontal
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: true,
          position: 'bottom',
          labels: {
            color: textColor,
            usePointStyle: true,
            boxWidth: 8
          }
        },
        tooltip: {
          enabled: true,
          callbacks: {
            label: function(context: any) {
              return ' ' + context.dataset.label + ': ' + context.parsed.x.toFixed(1) + '%';
            }
          }
        }
      },
      scales: {
        x: {
          stacked: true,
          max: displayPercentage > 100 ? displayPercentage : 100,
          ticks: {
            display: false, // hide numbers on the axis to look like a clean progress bar
          },
          grid: {
            display: false, // remove grid lines
            drawBorder: false
          }
        },
        y: {
          stacked: true,
          ticks: {
            display: false
          },
          grid: {
            display: false,
            drawBorder: false
          }
        }
      },
      animation: {
        duration: 1500,
        easing: 'easeOutQuart'
      }
    };
  }
}
