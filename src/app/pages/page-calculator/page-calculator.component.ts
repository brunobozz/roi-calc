import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ServCoingeckoApiService } from 'src/app/services/serv-coingecko-api/serv-coingecko-api.service';

@Component({
  selector: 'app-page-calculator',
  templateUrl: './page-calculator.component.html',
  styleUrls: ['./page-calculator.component.scss'],
})
export class PageCalculatorComponent implements OnInit {
  public currencyList: any = [];
  public coinsList: any = [];
  public coinMarket: any = [];

  public calculatorForm = new FormGroup({
    currency: new FormControl('BRL', [Validators.required]),
  });

  constructor(
    private toastr: ToastrService,
    private servCoingeckApi: ServCoingeckoApiService
  ) {}

  ngOnInit(): void {
    this.getCurrencyList();
    this.submitCalculatorForm();
  }

  private getCurrencyList() {
    this.servCoingeckApi
      .getData('simple/supported_vs_currencies')
      .subscribe((res: any) => {
        this.currencyList = res;
      });
  }

  private getCoinsMarket(val: string) {
    this.servCoingeckApi
      .getData(
        'coins/markets?vs_currency=' +
          val +
          '&order=market_cap_desc&per_page=1000&page=1&sparkline=false'
      )
      .subscribe((res: any) => {
        this.coinMarket = res;
      });
  }

  public fieldValidation(field: any) {
    return (
      this.calculatorForm.get(field)?.invalid &&
      this.calculatorForm.get(field)?.touched
    );
  }

  public submitCalculatorForm() {
    if (this.calculatorForm.valid) {
      this.getCoinsMarket(this.calculatorForm.value.currency);
    } else {
      this.toastr.error('Form Inválido', 'Não deu!');
    }
  }
}
