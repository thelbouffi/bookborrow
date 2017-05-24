import { Component, OnInit } from '@angular/core';
//import { Router, ActivatedRoute } from '@angular/router';
import { Wakanda } from '../wakanda.service';
import { BookService } from '../book.service';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
  providers: [Wakanda, AuthenticationService, BookService]  
})
export class BookComponent implements OnInit {
  isbn : string;
  //books : BookService;
  constructor(public wakanda : Wakanda, public authentication : AuthenticationService, public bookservice : BookService) { }

  ngOnInit() { 
    this.authentication.checkIfLogged().then(function(logged){
      if(logged){
       this.bookservice.getbooks();
       console.log('booksssssssss')
      }
    })
  }

   findBook(){
     this.bookservice.findByIsbn(this.isbn)
   }
  

  
}
