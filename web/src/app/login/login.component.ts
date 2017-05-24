import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Wakanda } from '../wakanda.service';
import { AuthenticationService } from '../authentication.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [Wakanda,AuthenticationService]
})
export class LoginComponent implements OnInit {

  username :string;
	password :string;
	session : number = 100;


  constructor(public route: ActivatedRoute, public router: Router, public wakanda: Wakanda, public athenticationService: AuthenticationService) { }

  ngOnInit() {
	  this.athenticationService.checkIfLogged().then(logged => {
			if(logged){
				this.router.navigate(['/dash']);
			}
	  });
	}
	
	login() {
		this.athenticationService.login(this.username, this.password, this.session);
	}

  
}
