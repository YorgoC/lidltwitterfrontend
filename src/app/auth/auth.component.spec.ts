import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthComponent } from './auth.component';
import { AuthModule } from '@auth0/auth0-angular';

describe('AuthComponent', () => {
  let component: AuthComponent;
  let fixture: ComponentFixture<AuthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[AuthModule.forRoot({
        domain: 'lidltwitter.eu.auth0.com',
        clientId: 'eV3BGa9w8WpzYzzKN3gh0YgfPN5CPa6v'
      }),],
      declarations: [ AuthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
