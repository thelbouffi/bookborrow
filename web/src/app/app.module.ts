import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { Routing } from './app.routes';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashComponent } from './dash/dash.component';
import { BookComponent } from './book/book.component';
import { CustomerComponent } from './customer/customer.component';
import { AddbookComponent } from './addbook/addbook.component';
import { UpdatebookComponent } from './updatebook/updatebook.component';
import { AddcustomerComponent } from './addcustomer/addcustomer.component';
import { UpdatecustomerComponent } from './updatecustomer/updatecustomer.component';
import { AvailabilityComponent } from './availability/availability.component';
import { BorrowedComponent } from './borrowed/borrowed.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashComponent,
    BookComponent,
    CustomerComponent,
    AddbookComponent,
    UpdatebookComponent,
    AddcustomerComponent,
    UpdatecustomerComponent,
    AvailabilityComponent,
    BorrowedComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
