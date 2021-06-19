import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  username: string;

  constructor() {
    this.username = '';
   }

  ngOnInit(): void {
  }

  onEnter(){
    if(this.username === ''){
      alert("Please enter a valid username!!!");
      return;
    }
  }

}
