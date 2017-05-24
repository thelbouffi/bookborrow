import { Component, OnInit } from '@angular/core';
//import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../authentication.service'



@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css'],
  providers: [AuthenticationService]
})
export class DashComponent implements OnInit {


  constructor(public authenticationService : AuthenticationService) { }

  ngOnInit() {
    
    
  }

  logout(){
    this.authenticationService.logout()
  }
  
}
