import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { LayoutModule } from '@angular/cdk/layout';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AuthModule} from '@auth0/auth0-angular';
import { Auth0Component } from './auth0/auth0.component';
import { environment as env} from '../environments/environment';

// Import the injector module and the HTTP client module from Angular
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// Import the HTTP interceptor from the Auth0 Angular SDK
import { AuthHttpInterceptor } from '@auth0/auth0-angular';
import { ProfileComponent } from './profile/profile.component';
import { TimelineComponent } from './timeline/timeline.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { RedirectComponent } from './redirect/redirect.component';
import { LoginComponent } from './login/login.component';
import { TweetsSectionComponent } from './tweets-section/tweets-section.component';
import { NewTweetComponent } from './new-tweet/new-tweet.component';



@NgModule({
  declarations: [
    AppComponent,
    Auth0Component,
    ProfileComponent,
    TimelineComponent,
    SignUpComponent,
    RedirectComponent,
    LoginComponent,
    TweetsSectionComponent,
    NewTweetComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,                               
    ReactiveFormsModule,
    HttpClientModule,
    MatDialogModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    LayoutModule,
    NgbModule,
    AuthModule.forRoot({
      domain: 'lidltwitter.eu.auth0.com',
      clientId: 'eV3BGa9w8WpzYzzKN3gh0YgfPN5CPa6v',
      audience: 'lidltwitter.com',
      serverUrl: 'http://localhost:5021/users',
      httpInterceptor: {
        allowedList: ['http://localhost:5021/users', 
                      'http://localhost:5021/tweets',
                      'http://localhost:5021/users/auth0',
                      'http://localhost:5021/users/getuser',
                      'http://localhost:5021/tweets/gettweets/*',
                      'http://localhost:5021/tweets/tweet'
                    ]
      }
      
    }),
  ],
  providers: [
    {
       provide: HTTP_INTERCEPTORS, 
       useClass: AuthHttpInterceptor, 
       multi: true 
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
