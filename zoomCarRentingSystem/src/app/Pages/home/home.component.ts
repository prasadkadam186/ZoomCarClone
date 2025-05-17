import { Component, inject, OnInit } from '@angular/core';
import { LocationServiceService } from '../../services/location-service.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  selectlocation:any
  locationService=inject(LocationServiceService)
  ngOnInit(): void {
    
  }
  getAllLocation()
  {
    
  }
}
