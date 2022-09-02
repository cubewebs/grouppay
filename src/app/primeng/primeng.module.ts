import { NgModule } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import {RippleModule} from 'primeng/ripple';
import {AvatarModule} from 'primeng/avatar';
import {ToastModule} from 'primeng/toast';




@NgModule({
  exports: [
    MenubarModule,
    InputTextModule,
    ButtonModule,
    CardModule,
    RippleModule,
    AvatarModule,
    ToastModule,
  ]
})
export class PrimengModule { }
