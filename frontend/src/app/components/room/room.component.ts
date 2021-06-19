import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {

  username: string;

  constructor(private router:Router, private activeRoute:ActivatedRoute) {
    this.username = '';
    console.log(this.router.getCurrentNavigation()?.extras.state);
   }

  ngOnInit(): void {
    this.username = history.state;
    console.log("username vairble", this.username);
  }

}
