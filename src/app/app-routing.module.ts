import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RedirectPageComponent} from './redirect-page/redirect-page.component'

const routes: Routes = [
  {path: 'redirect', component: RedirectPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
