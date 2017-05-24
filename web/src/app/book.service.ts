import { Injectable } from '@angular/core';
import { Wakanda } from './wakanda.service';

@Injectable()
export class BookService {
    
    allBooks : any[];

    constructor(public wakanda : Wakanda){}

    getbooks(){
        this.wakanda.getCatalog().then(function(ds){
             ds['Book'].query().then(function(collection){
                //console.log(collection.entities)
                this.allBooks = collection.entities;
            })
        })
    }

    findByIsbn(book){
        this.wakanda.getCatalog().then(function(ds){
            ds['Book'].find(book.isbn).then(function(bk){
                console.log(bk)
            })
        })
    }


} 