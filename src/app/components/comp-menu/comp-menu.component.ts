import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-comp-menu',
  templateUrl: './comp-menu.component.html',
  styleUrls: ['./comp-menu.component.scss'],
})
export class CompMenuComponent implements OnInit {
  public menuOpened = false;
  public menuSelected: string = '';
  public menuList: any = [
    {
      route: '/home',
      name: 'Home',
      icon: 'fa-home',
    },
    {
      route: '/roi-calculator',
      name: 'Roi Calculator',
      icon: 'fa-calculator',
    },
    {
      route: '/coin-prices',
      name: 'Coin Prices',
      icon: 'fa-line-chart',
    },
  ];

  constructor(private location: Location, private router: Router) {
    this.router.events.subscribe(() => {
      if (this.location.path() !== '') {
        this.menuSelected = location.path();
      } else {
        this.menuSelected = '/home';
      }
    });
  }

  ngOnInit(): void {}

  public toggleMenu() {
    this.menuOpened = !this.menuOpened;
  }

  public goRote(rote: string) {
    this.router.navigate([rote]);
    this.menuOpened = false;
  }
}
