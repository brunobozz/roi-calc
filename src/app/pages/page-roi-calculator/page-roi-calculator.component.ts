import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ServCoingeckoApiService } from 'src/app/services/serv-coingecko-api/serv-coingecko-api.service';

@Component({
  selector: 'app-roi-page-calculator',
  templateUrl: './page-roi-calculator.component.html',
})
export class PageRoiCalculatorComponent implements OnInit {
  constructor(
    private toastr: ToastrService,
    private servCoingeckApi: ServCoingeckoApiService
  ) {}

  ngOnInit(): void {
    this.getPing();
  }

  private getPing() {
    this.servCoingeckApi.getData('ping').subscribe((res: any) => {
      console.log(res);
    });
  }
}
