import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageRoiCalculatorComponent } from './pages/page-roi-calculator/page-roi-calculator.component';
import { PageCoinPricesComponent } from './pages/page-coin-prices/page-coin-prices.component';
import { PageHomeComponent } from './pages/page-home/page-home.component';

const routes: Routes = [
  { path: 'home', component: PageHomeComponent },
  { path: 'coin-price', component: PageCoinPricesComponent },
  { path: 'roi-calculator', component: PageRoiCalculatorComponent },
  { path: '', redirectTo: 'coin-price', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

export const ArrayOfComponents = [
  PageHomeComponent,
  PageRoiCalculatorComponent,
  PageCoinPricesComponent,
];
