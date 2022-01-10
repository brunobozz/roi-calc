import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { ServLoadingService } from '../serv-loading/serv-loading.service';

@Injectable({
  providedIn: 'root',
})
export class ServInterceptorService {
  activeRequests: number = 0;

  constructor(private loadingService: ServLoadingService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (this.activeRequests === 0) {
      this.loadingService.startLoading();
    }

    this.activeRequests++;

    return next.handle(request).pipe(
      finalize(() => {
        this.activeRequests--;
        if (this.activeRequests === 0) {
          this.loadingService.stopLoading();
        }
      })
    );
  }
}
