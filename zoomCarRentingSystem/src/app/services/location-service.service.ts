import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { IResponceModel } from '../Model/car.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocationServiceService {
  baseURL="https://freeapi.miniprojectideas.com/api/ZoomCar/"
  constructor() { }
  http = inject(HttpClient);


  getAllLocationService():Observable<IResponceModel>
  {
    return this.http.get<IResponceModel>(this.baseURL + "GetAllLocations");
  }

  getLocationByID(id:number)
  {
    return this.http.get(this.baseURL+"GetAllCarsByLocation?id="+id)
  }


}
