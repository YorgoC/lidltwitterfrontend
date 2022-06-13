import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { TimelineComponent } from './timeline/timeline.component';
import { AuthGuard } from '@auth0/auth0-angular';
import { RedirectComponent } from './redirect/redirect.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  {
    path:'',
    component: LoginComponent,
    
  },
  {
    path:'timeline',
    component: TimelineComponent,
    canActivate: [AuthGuard],
    
  },
  {
    path:'profile',
    component: ProfileComponent,
    canActivate: [AuthGuard],
    
  },
  {
    path:'redirect',
    component: RedirectComponent,
    canActivate: [AuthGuard],
    
  },
  {
    path:'signup',
    component: SignUpComponent,
    canActivate: [AuthGuard],
    
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
