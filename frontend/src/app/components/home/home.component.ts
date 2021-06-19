import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  username: string;

  constructor(private router: Router) {
    this.username = '';
   }

  ngOnInit(): void {
  }

  onEnter(){
    if(this.username === ''){
      alert("Please enter a valid username!!!");
      return;
    }
    this.router.navigateByUrl('/room', {state: {username: this.username}});
  }

}
