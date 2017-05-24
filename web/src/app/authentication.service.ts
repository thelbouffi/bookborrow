import { Injectable } from '@angular/core';
import { Wakanda } from './wakanda.service';
import {  Router } from '@angular/router';

@Injectable()
export class AuthenticationService {

constructor(public wakanda: Wakanda, public router: Router) {}


	login(username, password, session) {
		console.log('login is clicked')
	    this.wakanda.directory.login(username, password, session).then(() => {
	        this.router.navigate(['/dash']);
	    }).catch((e) => {
	        alert('Incorrect Login or Password !')
	    });
	}
	
	checkIfLogged() {
		console.log('checkiflogged')
	    return new Promise(resolve => {
	        this.wakanda.directory.getCurrentUser().then((user) => {
	            resolve(true);
	        }).catch((e) => {
	            this.router.navigate(['/']);
	        });
	    });
		
	}
	
	logout() {
	    this.wakanda.directory.logout().then(() => {
			console.log('loggedou is clicked')
	        this.router.navigate(['/']);
	    });
	}  
	
}