import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicLayoutComponent } from './public/public-layout.component';
import { PrivateLayoutComponent } from './private/private-layout.component';



@NgModule({
  declarations: [
    PublicLayoutComponent,
    PrivateLayoutComponent
  ],
    imports: [
        CommonModule,
    ]
})
export class LayoutsModule { }
