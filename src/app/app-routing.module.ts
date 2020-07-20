import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BcompComponent } from './bcomp/bcomp.component';
import { AcompComponent } from './acomp/acomp.component';

const routes: Routes = [
  {
    path: '',
    component: AcompComponent,
    pathMatch: 'full'
  },
  {
    path: 'acomp',
    component: AcompComponent
  },
  {
    path: 'bcomp',
    component: BcompComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
