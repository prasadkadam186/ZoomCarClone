import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.css'
})
export class BookingComponent {
  car = {
    name: 'Honda 2024',
    plate: 'bbb77777',
    seats: 4,
    accessories: 'AC, Music System, GPS',
    registeredDate: new Date('2025-04-19'),
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQascGtUWH1If-xYWMOFeS4XcRFIO_e3p2_uA&s'
  };

  booking = {
    date: '',
    startTime: '',
    endTime: ''
  };

  bookCar() {
    console.log('Booking Confirmed:', this.booking);
    alert('Car booked successfully!');
  }

}
