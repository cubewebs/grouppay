import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';

import { PrimengModule } from '../primeng/primeng.module';

import { HomeComponent } from './home/home.component';
import { MyGroupsComponent } from './my-groups/my-groups.component';
import { NetworkComponent } from './network/network.component';


@NgModule({
  declarations: [
    HomeComponent,
    MyGroupsComponent,
    NetworkComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    PrimengModule,
  ]
})
export class PagesModule { }
