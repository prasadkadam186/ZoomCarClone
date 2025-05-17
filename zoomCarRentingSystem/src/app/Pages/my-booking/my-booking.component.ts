import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-my-booking',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-booking.component.html',
  styleUrl: './my-booking.component.css'
})
export class MyBookingComponent {
  myBookings = [
    {
      carName: 'Ferrari Ferrari',
      image: 'https://imgd-ct.aeplcdn.com/664x415/n/cw/ec/139139/harrier-facelift-exterior-right-front-three-quarter-5.jpeg?isig=0&q=80',
      status: 'Active',
      travelDate: '2025-04-28T00:00:00',
      location: 'Mumbai Zoom Location',
      price: 'dcxdfzx',
      ownerName: 'abc ltd sti',
      ownerPhone: '999888777'
    },
    {
      carName: 'Kia Sportage Muhammad Ali',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-ogqkYJXA-k7it2iBVVeTlm04SykOB_QrCA&s',
      status: 'Active',
      travelDate: '2025-04-21T00:00:00',
      location: 'Kharadi, Pune',
      price: '1555',
      ownerName: 'bishnu',
      ownerPhone: '1452879547'
    }
  ];
}
