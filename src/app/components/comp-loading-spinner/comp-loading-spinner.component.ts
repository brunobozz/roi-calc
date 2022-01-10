import {
  Component,
  ElementRef,
  ChangeDetectorRef,
  AfterViewInit,
  OnDestroy,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { ServLoadingService } from 'src/app/services/serv-loading/serv-loading.service';

@Component({
  selector: 'app-comp-loading-spinner',
  templateUrl: './comp-loading-spinner.component.html',
  styleUrls: ['./comp-loading-spinner.component.scss'],
})
export class CompLoadingSpinnerComponent implements AfterViewInit, OnDestroy {
  loadingSubscription!: Subscription;

  constructor(
    private loadingScreenService: ServLoadingService,
    private _elmRef: ElementRef,
    private _changeDetectorRef: ChangeDetectorRef
  ) {}

  ngAfterViewInit(): void {
    this._elmRef.nativeElement.style.display = 'none';
    this.loadingSubscription = this.loadingScreenService.loading$
      .pipe()
      .subscribe((status: boolean) => {
        this._elmRef.nativeElement.style.display = status ? 'block' : 'none';
        this._changeDetectorRef.detectChanges();
      });
  }

  ngOnDestroy() {
    this.loadingSubscription.unsubscribe();
  }
}
