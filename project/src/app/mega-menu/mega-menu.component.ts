import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../mega-menu/menu-item';

@Component({
  selector: 'app-mega-menu',
  templateUrl: './mega-menu.component.html',
  styleUrls: ['./mega-menu.component.scss']
})
export class MegaMenuComponent implements OnInit {
  menuItems: MenuItem[] = [
    {
      label: 'CUSTOMERS',
      showOnMobile: true,
      showOnTablet: true,
      showOnDesktop: true
    },
    {
      label: 'COSTS',
      showOnMobile: false,
      showOnTablet: true,
      showOnDesktop: true
    },
    {
      label: 'REPORTS',
      showOnMobile: false,
      showOnTablet: false,
      showOnDesktop: true
    },
    {
      label: 'SETTINGS',
      showOnMobile: false,
      showOnTablet: true,
      showOnDesktop: true
    },
    {
      label: 'HELPS',
      showOnMobile: false,
      showOnTablet: false,
      showOnDesktop: true
    },
    {
      label: 'SHOPPING',
      showOnMobile: false,
      showOnTablet: false,
      showOnDesktop: false
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
