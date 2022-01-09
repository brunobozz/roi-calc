import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-page-calculator',
  templateUrl: './page-calculator.component.html',
  styleUrls: ['./page-calculator.component.scss'],
})
export class PageCalculatorComponent implements OnInit {
  public calculatorForm = new FormGroup({
    value1: new FormControl('', [Validators.required]),
    value2: new FormControl('', [Validators.required]),
  });

  constructor(private toastr: ToastrService) {}

  ngOnInit(): void {}

  public fieldValidation(field: any) {
    return (
      this.calculatorForm.get(field)?.invalid &&
      this.calculatorForm.get(field)?.touched
    );
  }

  public submitCalculatorForm() {
    if (this.calculatorForm.valid) {
      this.toastr.error('Form válido', 'Feito!');
    } else {
      this.toastr.error('Form Inválido', 'Não deu!');
    }
  }
}
