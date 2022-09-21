import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import {RippleModule} from 'primeng/ripple';
import {AvatarModule} from 'primeng/avatar';
import {ToastModule} from 'primeng/toast';
import {TableModule} from 'primeng/table';




@NgModule({
  exports: [
    BrowserAnimationsModule,
    MenubarModule,
    InputTextModule,
    ButtonModule,
    CardModule,
    RippleModule,
    AvatarModule,
    ToastModule,
    TableModule,
    
  ]
})
export class PrimengModule { }
