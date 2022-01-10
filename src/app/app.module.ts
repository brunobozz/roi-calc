import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule, ArrayOfComponents } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//SERVICES
import { ServInterceptorService } from './services/serv-interceptor/serv-interceptor.service';

//COMPONENTS
import { CompHeaderComponent } from './components/comp-header/comp-header.component';
import { CompLoadingSpinnerComponent } from './components/comp-loading-spinner/comp-loading-spinner.component';
import { PageCoinPricesComponent } from './pages/page-coin-prices/page-coin-prices.component';
import { CompMenuComponent } from './components/comp-menu/comp-menu.component';
import { CompLogoComponent } from './components/comp-logo/comp-logo.component';

@NgModule({
  declarations: [
    AppComponent,

    ArrayOfComponents,

    //COMPONENTS
    CompHeaderComponent,
    CompLoadingSpinnerComponent,
    PageCoinPricesComponent,
    CompMenuComponent,
    CompLogoComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-top-right',
      maxOpened: 2,
      autoDismiss: true,
    }),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ServInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
