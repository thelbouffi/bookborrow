import { RouterModule } from '@angular/router';

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

const appRoutes = [
    {path:'',  component: LoginComponent},
    {path:'dash',  component: DashComponent},
    {path:'book',  component: BookComponent},
    {path:'customer',  component: CustomerComponent},
    {path:'addbook',  component: AddbookComponent},
    {path:'updatebook',  component: UpdatebookComponent},
    {path:'addcustomer',  component: AddcustomerComponent},
    {path:'updatecustomer',  component: UpdatecustomerComponent},
    {path:'availibility',  component: AvailabilityComponent},
    {path:'borrowed',  component: BorrowedComponent},
    {path:'**',  component: LoginComponent }

]

export const Routing = RouterModule.forRoot(appRoutes);