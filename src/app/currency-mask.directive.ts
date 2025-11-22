import { Directive, HostListener, ElementRef, OnInit, inject } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[appCurrencyMask]',
  standalone: true
})
export class CurrencyMaskDirective implements OnInit {

  private el = inject(ElementRef);
  private control = inject(NgControl);

  ngOnInit() {
    // Format initial value if present
    if (this.control.value) {
      this.format(this.control.value);
    }
  }

  @HostListener('input', ['$event'])
  onInput(event: any) {
    const inputVal = event.target.value;
    this.format(inputVal);
  }

  @HostListener('blur')
  onBlur() {
    // Optional: Ensure formatting on blur if needed
    const inputVal = this.el.nativeElement.value;
    this.format(inputVal);
  }

  private format(value: any) {
    if (value === null || value === undefined || value === '') {
      this.el.nativeElement.value = '';
      return;
    }

    // Remove non-digit characters
    let numericValue = value.toString().replace(/\D/g, '');

    // Handle empty case after strip
    if (numericValue === '') {
      this.el.nativeElement.value = '';
      this.control.control?.setValue(null, { emitEvent: false });
      return;
    }

    // Convert to number (cents)
    let numberVal = parseFloat(numericValue) / 100;

    // Format to BRL currency string
    const formattedValue = numberVal.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    });

    // Update the input display value
    this.el.nativeElement.value = formattedValue;

    // Update the form control with the numeric value
    // We use emitEvent: false to avoid infinite loops if we were subscribing to valueChanges,
    // but here we are just setting the value. However, setting the value on the control
    // might trigger the input again in some setups, but usually safe with setValue.
    // IMPORTANT: We want the model to store the NUMBER, not the string.
    this.control.control?.setValue(numberVal, { emitEvent: false, emitModelToViewChange: false });
  }
}
