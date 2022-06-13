import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {

  now: number = Date.now();
  constructor(public auth: AuthService) { 
    this.auth.user$.subscribe((user) => {console.log(user?.sub);
    } ) ;

    this.now = Date.now();
  }

  ngOnInit(): void {
    
  }

}
