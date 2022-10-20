import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PublicLayoutComponent} from "./layouts/public/public-layout.component";
import {PrivateLayoutComponent} from "./layouts/private/private-layout.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: '',
    component: PrivateLayoutComponent ,
    data: {title: 'full Views'}
  },
  {
    path: '',
    component: PublicLayoutComponent,
    data: {title: 'content Views'}
  },
  {
    path: '**',
    redirectTo: 'error'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
