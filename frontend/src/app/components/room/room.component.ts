import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {

  username: string;

  constructor(private router:Router) {
    this.username = '';
   }

  ngOnInit(): void {
    this.username = history.state.username;
    if(this.username == undefined){
      alert('Please select a username first');
      this.router.navigate(['']);
      return;
    }
    console.log("username vairble", this.username);
  }

}
