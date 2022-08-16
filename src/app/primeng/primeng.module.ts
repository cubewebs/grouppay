import { NgModule } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';



@NgModule({
  declarations: [],
  imports: [
    MenubarModule,
    InputTextModule,
    ButtonModule,
  ],
  exports: [
    MenubarModule,
    InputTextModule,
    ButtonModule,
  ]
})
export class PrimengModule { }
