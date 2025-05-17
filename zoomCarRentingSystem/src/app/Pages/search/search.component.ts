import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  cars = [
  {
    name: 'Tesla Model S',
    location: 'Mumbai',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQascGtUWH1If-xYWMOFeS4XcRFIO_e3p2_uA&s'
  },
  {
    name: 'Ford EcoSport',
    location: 'Pune',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-ogqkYJXA-k7it2iBVVeTlm04SykOB_QrCA&s'
  },
  {
    name: 'Honda Accord',
    location: 'Delhi',
    image: 'https://www.challenges.fr/assets/img/2021/01/29/cover-r4x3w1200-60144aa5c45d2-peugeot-508pse-testdrive-0121tc237-resultat-jpg.jpg'
  }
];

}
