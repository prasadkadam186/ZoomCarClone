import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, inject, OnInit, signal, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  // Declare and inilizing the signals
  formVisible = signal<string>('loginForm')
  // Delareing the View child
  @ViewChild("loginModel") loginModel!: ElementRef;
  registerObj: any = {
    "userId": 0,
    "name": "",
    "userRole": "customer",
    "emailId": "",
    "mobileNo": "",
    "password": "",
    "createdOn": new Date()
  }
  loggedInUser : any
  http = inject(HttpClient);
  // For toggle the forms

  ngOnInit()
  {
    // Storing the logged in user data on the page load.
    const loggedData = localStorage.getItem('zoomCar');
    if(loggedData != null){
      this.loggedInUser=JSON.parse(loggedData);
    }
  }

  // To toggle the form that is register or login
  toggleForm(formType: string) {
    this.formVisible.set(formType);
  }
  // To open the form pop up
  openModel() {
    if (this.loginModel) {
      this.loginModel.nativeElement.style.display = "block";
    }
  }
    // To close the form pop up
  closeModel() {
    if (this.loginModel) {
      this.loginModel.nativeElement.style.display = "none";
    }
  }
// To register the new user
  registerNewuser() {
    this.http.post("https://freeapi.miniprojectideas.com/api/ZoomCar/AddNewUser", this.registerObj).subscribe((res: any) => {
      if (res.result) {
        alert("User register sucessfully");
        this.closeModel();
        this.registerObj = {
          "userId": 0,
          "name": "",
          "userRole": "customer",
          "emailId": "",
          "mobileNo": "",
          "password": "",
          "createdOn": new Date()
        }
      }
      else {
        alert(res.message);
      }
    })
  }
// To login the user
  onLogin() {
    this.http.post("https://freeapi.miniprojectideas.com/api/ZoomCar/Login", this.registerObj).subscribe((res: any) => {
      if (res.result) {
        alert("User Logged in sucessfully");
        this.loggedInUser=res.data;
         // To store the data into the local storage
        localStorage.setItem('zoomCar', JSON.stringify(res.data))
         this.registerObj = {
          "userId": 0,
          "name": "",
          "userRole": "customer",
          "emailId": "",
          "mobileNo": "",
          "password": "",
          "createdOn": new Date()
        }
      } else {
        alert(res.message)
      }
    })
  }
// To logout the user
  onLogout(){
    localStorage.removeItem('zoomCar');
    this.loggedInUser=undefined;
  }

}
