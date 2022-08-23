import { NgModule } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import {RippleModule} from 'primeng/ripple';
import {AvatarModule} from 'primeng/avatar';




@NgModule({
  exports: [
    MenubarModule,
    InputTextModule,
    ButtonModule,
    CardModule,
    RippleModule,
    AvatarModule,
  ]
})
export class PrimengModule { }
