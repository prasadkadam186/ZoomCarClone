import { Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { SearchComponent } from './Pages/search/search.component';
import { BookingComponent } from './Pages/booking/booking.component';
import { MyBookingComponent } from './Pages/my-booking/my-booking.component';

export const routes: Routes = [
    {
        path : "",
        redirectTo : "home",
        pathMatch : "full"
    },
    {
        path:"home",
        component:HomeComponent
    },
    {
        path:"search",
        component:SearchComponent
    },
    {
        path:"booking",
        component:BookingComponent
    },
    {
        path:"myBooking",
        component:MyBookingComponent
    },
];
