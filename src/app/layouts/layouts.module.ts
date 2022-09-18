import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicComponent } from './public/public.component';
import { PrivateComponent } from './private/private.component';



@NgModule({
  declarations: [
    PublicComponent,
    PrivateComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LayoutsModule { }
