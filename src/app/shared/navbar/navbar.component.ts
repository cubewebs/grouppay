import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  MenuItems!: MenuItem[];
  avatar: string = 'scr/assets/img/avatar.jpg'

  constructor(private primeConfig: PrimeNGConfig) { }

  ngOnInit(): void {

    this.primeConfig.ripple = true;

    this.MenuItems = [
      {
          label:'Home',
          icon:'pi pi-fw pi-home',
          routerLink: '/'
      },
      {
          label:'Network',
          icon:'pi pi-fw pi-th-large',
          routerLink: 'network'
      },
      {
          label:'My Groups',
          icon:'pi pi-fw pi-table',
          routerLink: 'my-groups'
      },
      {
          separator: true
      },
      {
          label:'User',
          icon:'pi pi-fw pi-user',
          items:[
              {
                  label:'Profile',
                  icon:'pi pi-fw pi-user-plus',
              },
              {
                  label:'My Groups',
                  icon:'pi pi-fw pi-user-minus',
                  routerLink: 'my-groups'
              },
              {
                  label: 'Login',
                  icon:  'pi pi-fw pi-sign-in',
                  routerLink: 'auth/login'
              },
              {
                  label: 'Register',
                  icon: 'pi pi-fw pi-user-plus',
                  routerLink: 'auth/register'
              },
              {
                  label:'Logout',
                  icon:'pi pi-fw pi-sign-out',
                  routerLink: 'auth/logout'
              }
          ]
      }
  ];

  }

}
