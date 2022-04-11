import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { AuthModule } from '@auth0/auth0-angular';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule.forRoot({
      domain: 'lidltwitter.eu.auth0.com',
      clientId: 'eV3BGa9w8WpzYzzKN3gh0YgfPN5CPa6v'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
