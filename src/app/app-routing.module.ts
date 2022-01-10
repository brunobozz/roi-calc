import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageCalculatorComponent } from './pages/page-calculator/page-calculator.component';
import { PageHomeComponent } from './pages/page-home/page-home.component';

const routes: Routes = [
  { path: 'home', component: PageHomeComponent },
  { path: 'coin-price', component: PageCalculatorComponent },
  { path: '', redirectTo: 'coin-price', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

export const ArrayOfComponents = [PageHomeComponent, PageCalculatorComponent];
