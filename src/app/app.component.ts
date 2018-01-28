import { Component, OnInit } from '@angular/core';
import { UserAlbumsService } from "./services/user-albums.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{

  token:string;

  constructor(private userAlbum: UserAlbumsService){}

  ngOnInit(){
    this.userAlbum.getTempToken()
      .subscribe(data => {
        this.token = data;
        console.log(this.token);
      })
  }
}
