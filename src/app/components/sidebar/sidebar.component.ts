import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
   // { path: '/Invoice', title: 'Invoice',  icon:'receipt', class: '' },
    //{ path: '/Stock', title: 'Stock',  icon:'category', class: '' },
    { path: '/Products', title: 'Table',  icon:'table', class: '' },
   // { path: '/Customers', title: 'Customer',  icon:'groups', class: '' },
    //{ path: '/Provider', title: 'Provider',  icon:'transfer_within_a_station', class: '' },
    { path: '/Order-Sale', title: 'Client',  icon:'people', class: '' },
    { path: '/Purchase-Order', title: 'ticket',  icon:'local_activity', class: '' },
   /* { path: '/Payments', title: 'Payments',  icon:'payments', class: 'active-pro' },
    { path: '/addOrEditOrderSale', title: 'Add Order Sale',  icon:'', class: '' },
    { path: '/createPurchaseOrder', title: 'Add Purchase Order',  icon:'', class: ''},
    { path: '/create-provider', title: 'Add Provider',  icon:'', class: '' },
    { path: '/update-provider/:id', title: 'Update Provider',  icon:'', class: ''},*/
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
